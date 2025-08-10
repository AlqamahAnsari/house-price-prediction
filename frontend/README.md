# House Price Prediction Frontend

This project is a React application that serves as the frontend for a house price prediction system. It utilizes Tailwind CSS for styling and communicates with a Flask backend to process predictions.

## Project Structure

```
frontend
├── public
│   └── index.html         # Main HTML file for the React application
├── src
│   ├── components
│   │   └── HousePriceForm.jsx  # Component for house price input form
│   ├── styles
│   │   └── tailwind.css    # Tailwind CSS styles
│   ├── App.jsx             # Main React component
│   └── index.jsx           # Entry point for the React application
├── package.json            # npm configuration file
└── tailwind.config.js      # Tailwind CSS configuration file
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd house-price-prediction/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   To start the development server, use:
   ```bash
   npm start
   ```

4. **Access the Application**
   Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the form in the application to input the necessary data for house price predictions.
- The application will send the data to the Flask backend for processing and display the predicted price.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.