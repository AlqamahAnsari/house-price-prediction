from flask import Flask, render_template, request
import pickle
import numpy as np

# Load model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get values from form
    features = [float(x) for x in request.form.values()]
    final_features = np.array([features])
    
    # Predict
    prediction = model.predict(final_features)[0]
    
    return render_template('index.html', 
                           prediction_text=f"Predicted House Price: ${prediction*100000:.2f}")

if __name__ == "__main__":
    app.run(debug=True)
