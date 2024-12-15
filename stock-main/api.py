from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app import StockPredictor

app = FastAPI()

# Request model
class StockRequest(BaseModel):
    stock_symbol: str

@app.post("/predict")
def predict_next_7_days(request: StockRequest):
    try:
        predictor = StockPredictor(request.stock_symbol)
        data = predictor.fetch_historical_data()
        xtrain, xtest, ytrain, ytest, processed_data = predictor.prepare_data(data)
        
        # Train the model
        predictor.train_model(xtrain, ytrain)
        
        # Get the last sequence and last observed price
        last_sequence = xtest[-1]
        last_price = processed_data["Close"].iloc[-1]
        
        # Generate predictions
        predictions = predictor.predict_next_7_days(last_sequence, last_price)
        return {"stock_symbol": request.stock_symbol, "predictions": predictions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
