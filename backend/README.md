# House Price Prediction Backend

This is the backend component of the House Price Prediction project, built using Flask. The backend is responsible for handling requests from the frontend, processing data, and returning predictions based on the input provided.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/house-price-prediction.git
   cd house-price-prediction/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required Python packages listed in `requirements.txt`.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   Start the Flask application.
   ```bash
   python app.py
   ```

   The application will be running on `http://127.0.0.1:5000/` by default.

## Usage

- The backend exposes endpoints for the frontend to interact with. You can send requests to the Flask server to get house price predictions based on user input.
- Ensure that the frontend is configured to communicate with the correct backend URL.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.