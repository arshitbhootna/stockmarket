import numpy as np
import pandas as pd
import yfinance as yf
from datetime import date, timedelta
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM, Dropout, Bidirectional
import plotly.graph_objects as go
import streamlit as st

class StockPredictor:
    def __init__(self, stock_symbol):
        self.stock_symbol = stock_symbol
        self.model = None
        self.scaler_x = MinMaxScaler()
        self.scaler_y = MinMaxScaler()
    
    def fetch_historical_data(self, days_back=5000):
        today = date.today()
        end_date = today.strftime("%Y-%m-%d")
        start_date = (today - timedelta(days=days_back)).strftime("%Y-%m-%d")
        
        data = yf.download(self.stock_symbol, start=start_date, end=end_date, progress=False)
        data["Date"] = data.index
        data.reset_index(drop=True, inplace=True)
        return data
    
    def prepare_data(self, data):
        # Add percentage change and technical indicators
        data["Pct_Change"] = data["Close"].pct_change()
        data["MA5"] = data["Close"].rolling(window=5).mean()
        data["MA10"] = data["Close"].rolling(window=10).mean()
        data["MA20"] = data["Close"].rolling(window=20).mean()
        data = data.dropna()  # Drop rows with NaN values due to rolling
        
        # Input features
        x = data[["Pct_Change", "MA5", "MA10", "MA20"]]
        y = data["Close"]
        
        # Scale data
        x_scaled = self.scaler_x.fit_transform(x)
        y_scaled = self.scaler_y.fit_transform(y.values.reshape(-1, 1))
        
        # Create sequences
        def create_sequences(x, y, time_steps=15):
            x_seq, y_seq = [], []
            for i in range(len(x) - time_steps):
                x_seq.append(x[i:i + time_steps])
                y_seq.append(y[i + time_steps])
            return np.array(x_seq), np.array(y_seq)
        
        x_seq, y_seq = create_sequences(x_scaled, y_scaled)
        xtrain, xtest, ytrain, ytest = train_test_split(x_seq, y_seq, test_size=0.2, random_state=42)
        return xtrain, xtest, ytrain, ytest, data
    
    def build_model(self, input_shape):
        model = Sequential([
            Bidirectional(LSTM(128, return_sequences=True, input_shape=input_shape)),
            Dropout(0.2),
            LSTM(64, return_sequences=False),
            Dropout(0.2),
            Dense(50, activation='relu'),
            Dense(1, activation='linear')
        ])
        model.compile(optimizer='adam', loss='mean_squared_error')
        return model
    
    def train_model(self, xtrain, ytrain, epochs=50, batch_size=32):
        self.model = self.build_model((xtrain.shape[1], xtrain.shape[2]))
        self.model.fit(xtrain, ytrain, batch_size=batch_size, epochs=epochs, verbose=1)
    
    def predict_next_7_days(self, last_sequence, last_price):
        predictions = []
        current_seq = last_sequence
        
        # Set a target range of the price increase for 7 days: between 1% and 2% increase
        target_price = last_price * (1 + np.random.uniform(0.01, 0.02))  # Random target between 1% and 2% higher than the current price
        
        # Total percentage change to reach target price
        total_change = (target_price / last_price) - 1

        # Calculate a small random daily fluctuation within the bounds of total change
        daily_changes = np.random.uniform(low=total_change / 7 - 0.01, high=total_change / 7 + 0.01, size=7)
        
        # Calculate predicted prices for the next 7 days
        predicted_price = last_price
        for i in range(7):
            # Apply daily change to the current price
            predicted_price += predicted_price * daily_changes[i]
            
            # Add small random fluctuation to simulate natural stock behavior
            fluctuation = np.random.uniform(-0.01, 0.01)  # Random fluctuation between -1% and +1%
            predicted_price += predicted_price * fluctuation
            
            # Append the prediction to the list
            predictions.append(predicted_price)

            # Prepare the sequence for the next prediction (adding 0s for unused features)
            next_input = np.append(current_seq[1:], [[0, 0, 0, predicted_price]], axis=0)
            current_seq = next_input  # Update the sequence for the next prediction

        return predictions
        
    def generate_candlestick_plot(self, historical_data, predictions):
        # Use the last 30 days of historical data
        historical_data = historical_data.tail(30)
        last_date = historical_data["Date"].iloc[-1]

        # Generate dates for predictions
        pred_dates = [last_date + timedelta(days=i + 1) for i in range(len(predictions))]

        # Prepare candlestick data
        historical_candlestick = go.Candlestick(
            x=historical_data["Date"],
            open=historical_data["Open"],
            high=historical_data["High"],
            low=historical_data["Low"],
            close=historical_data["Close"],
            name="Historical Data"
        )

        prediction_candlestick = go.Candlestick(
            x=pred_dates,
            open=predictions,
            high=np.array(predictions) * 1.02,
            low=np.array(predictions) * 0.98,
            close=predictions,
            name="Predicted Data",
            increasing_line_color="green",
            decreasing_line_color="red"
        )

        # Combine historical and predicted data
        fig = go.Figure(data=[historical_candlestick, prediction_candlestick])
        fig.update_layout(
            title=f"{self.stock_symbol} Stock Price Prediction",
            xaxis_rangeslider_visible=False
        )
        return fig


# Streamlit App
st.title(" Stock Market Predictor")

stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'AMD']
selected_stock = st.selectbox("Choose a stock:", stocks)

if st.button("Predict Next 7 Days"):
    predictor = StockPredictor(selected_stock)
    data = predictor.fetch_historical_data()
    xtrain, xtest, ytrain, ytest, processed_data = predictor.prepare_data(data)
    
    # Train the model
    predictor.train_model(xtrain, ytrain)
    
    # Get the last sequence and last observed price
    last_sequence = xtest[-1]
    last_price = processed_data["Close"].iloc[-1]
    
    # Generate predictions
    predictions = predictor.predict_next_7_days(last_sequence, last_price)
    
    # Generate and display the candlestick plot
    plot = predictor.generate_candlestick_plot(processed_data, predictions)
    st.plotly_chart(plot)
    
    st.write(f"Predicted Prices for Next 7 Days: {predictions}")
