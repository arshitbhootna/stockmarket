"use client";
import React, { useState } from "react";

const PredictStock = () => {
  const [stockSymbol, setStockSymbol] = useState("");  // User input for stock symbol
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);

  // Function to handle the form submission
  const handlePredict = async (e) => {
    e.preventDefault();
    setError(null);  // Reset the error message before making a request

    if (!stockSymbol.trim()) {
      setError("Please enter a valid stock symbol.");
      return;
    }

    try {
      // Send the stock symbol to the FastAPI backend
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
"Access-Control-Allow-Credentials" : 'true',
"Access-Control-Allow-Methods" : "GET, POST, OPTIONS",
"Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",

        },
        body: JSON.stringify({
          stock_symbol: stockSymbol,  // Passing the stock symbol entered by the user
        }),
      });

      // Checking if the response is OK
      if (!response.ok) {
        throw new Error(`Failed to fetch predictions. Status: ${response.status}`);
      }

      // Parsing the JSON response
      const data = await response.json();
      console.log(data);
      // Setting predictions to state
      if (data.predictions && Array.isArray(data.predictions)) {
        setPredictions(data.predictions);
      } else {
        throw new Error("Invalid predictions data format.");
      }

    } catch (err) {
      setError(`qwertyuiop An error occurred: ${err.message || "Unknown error"}`);
      console.error("Prediction error:", err);
    }
  };

  return (
    <div>
      <h1>Stock Price Prediction</h1>
      <form onSubmit={handlePredict}>
        <input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}  // Capture user input
          placeholder="Enter stock symbol"
        />
        <button type="submit">Predict</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {predictions.length > 0 && (
        <div>
          <h3>Predicted Prices for Next 7 Days:</h3>
          <ul>
            {predictions.map((price, index) => (
              <li key={index}>Day {index + 1}: {price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PredictStock;
