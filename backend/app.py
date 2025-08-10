from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model (make sure to place your model file in the appropriate directory)
model = joblib.load('path/to/your/model.pkl')

@app.route('/')
def home():
    return "Welcome to the House Price Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    # Extract features from the incoming JSON data
    features = [data['feature1'], data['feature2'], data['feature3']]  # Update with actual feature names
    prediction = model.predict([features])
    
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)