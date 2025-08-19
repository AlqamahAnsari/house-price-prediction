# House Price Prediction App

This project is a Flask-based web application for predicting California house prices using a Linear Regression model trained on the California Housing dataset.

## Features

- Simple web form for entering house/area details
- Predicts house price instantly using the trained model
- Visualizes clean UI with custom CSS
- All-in-one folder for easy deployment

## Folder Structure

```
project-root/
├── static/
│   └── style.css
├── templates/
│   └── index.html
├── app.py
├── house_price_prediction.ipynb
├── model.pkl
└── README.md
```

## Getting Started

### 1. Clone this repository
```
git clone https://github.com/alqamahansari/house-price-prediction.git
cd house-price-prediction
```

### 2. Install requirements
```
pip install flask scikit-learn pandas numpy matplotlib seaborn
```

### 3. Run the application
```
python app.py
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

## Usage

1. Fill all required features on the web form:
   - Median Income
   - House Age
   - Average Rooms
   - Average Bedrooms
   - Population
   - Average Occupants
   - Latitude
   - Longitude
2. Click **Predict** to see the estimated house price.

## Model Training

- Model training is shown in `house_price_prediction.ipynb` using the California Housing dataset.
- The trained model is saved as `model.pkl` for use in the Flask app.

## Customization

- Update `style.css` for theme changes.
- Modify the Jupyter notebook to experiment with other algorithms or feature engineering.

## License

MIT

