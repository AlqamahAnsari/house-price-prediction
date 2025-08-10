# House Price Prediction Project

This project is a web application for predicting house prices using a Flask backend and a React frontend styled with Tailwind CSS. 

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **app.py**: The main application file for the Flask backend. It initializes the Flask app, sets up routes for handling requests, and includes logic for processing house price predictions.
- **requirements.txt**: Lists the Python dependencies required for the backend, such as Flask and any libraries needed for machine learning or data processing.
- **README.md**: Documentation for the backend, including setup instructions and usage details.

### Frontend

- **src/App.jsx**: The main component of the React application, serving as the entry point for the frontend and may include routing and state management.
- **src/index.jsx**: The entry point for the React application, rendering the App component into the DOM.
- **src/components/HousePriceForm.jsx**: A React component that provides a form for users to input data for house price predictions. It handles form submission and may display results.
- **src/styles/tailwind.css**: Contains the Tailwind CSS styles for the frontend application, allowing for utility-first styling.
- **public/index.html**: The main HTML file for the React application, including the root div where the React app will be rendered.
- **package.json**: The configuration file for npm, listing the dependencies, scripts, and metadata for the frontend React application.
- **tailwind.config.js**: The configuration file for Tailwind CSS, specifying customizations and settings for the utility classes.
- **README.md**: Documentation for the frontend, including setup instructions and usage details.

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory.
2. Install the required Python packages using:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the required npm packages using:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage

Once both the backend and frontend are running, you can access the web application in your browser. The frontend will provide a form for entering house features, and upon submission, it will display the predicted house price based on the input data.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.