# StockFusion



## About

This Stock Trading App allows users to manage their stock holdings, positions, and orders independently. Each user has their own personalized experience, where they can track their investments and trades without interference from other users. The app ensures that all user-specific data is isolated, providing security and privacy for every user.

## Features

- **User Authentication**: Secure signup and login functionality using JWT authentication.
- **Holdings Management**: Users can manage their stock holdings, track quantities, and view the average purchase prices.
- **Positions Tracking**: Each user can view and track their stock positions, including real-time price updates and daily performance.
- **Buy/Sell Stocks**: Users can execute buy and sell actions directly from the app, with each action affecting their personal holdings and positions.
- **Order Management**: Orders are tracked individually for each user. No user can see the orders of another user.
- **Responsive Dashboard**: A personalized dashboard for each user displaying their stock portfolio, including real-time updates and market data.
- **MongoDB Integration**: User data (holdings, positions, and orders) are stored in a MongoDB database and tied to individual users.
- **RESTful API**: The app uses a RESTful API for handling user actions such as buying and selling stocks, and retrieving holdings, positions, and orders.

## Technologies Used

- **Frontend**: React.js for dynamic user interface and component management.
- **Backend**: Node.js and Express for handling server-side operations and API endpoints.
- **Database**: MongoDB for storing user-specific data including holdings, positions, and orders.
- **Authentication**: JSON Web Token (JWT) for user session management and secure API access.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sushant0124/StockFusion.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StockFusion
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Set up environment variables in the `backend` directory (e.g., database URI, JWT secret):
   ```bash
   cp .env.example .env
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

6. Start the frontend application:
   ```bash
   cd ../frontend
   npm start
   ```

## How It Works

1. **Sign Up/Login**: Users create an account or log in to an existing account. JWT authentication ensures secure and unique sessions.
2. **Dashboard**: After logging in, users are redirected to their personalized dashboard where they can view their holdings, positions, and orders.
3. **Buying/Selling Stocks**: Users can enter stock symbols, quantity, and price to buy or sell stocks. The app updates their holdings and positions accordingly.
4. **Order Management**: All buy and sell actions are recorded as orders, which can be viewed and tracked by the user.

## Future Enhancements

- **Stock Price APIs**: Integrate real-time market data for better decision-making.
- **Notifications**: Add price alerts and trade confirmations.
- **Mobile App**: Develop a mobile version to enhance accessibility.
- **Analytics**: Provide users with performance insights and trend analysis.

# stockmarket
