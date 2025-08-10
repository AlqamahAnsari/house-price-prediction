import React, { useState } from 'react';

const HousePriceForm = () => {
    const [formData, setFormData] = useState({
        bedrooms: '',
        bathrooms: '',
        sqft_living: '',
        sqft_lot: '',
        floors: '',
        waterfront: false,
        view: '',
        condition: '',
        grade: '',
        sqft_above: '',
        sqft_basement: '',
        yr_built: '',
        yr_renovated: '',
        zipcode: '',
    });

    const [predictedPrice, setPredictedPrice] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setPredictedPrice(data.price);
        } catch (error) {
            console.error('Error predicting house price:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">House Price Prediction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="sqft_living" placeholder="Square Feet Living" value={formData.sqft_living} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="sqft_lot" placeholder="Square Feet Lot" value={formData.sqft_lot} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="floors" placeholder="Floors" value={formData.floors} onChange={handleChange} className="w-full p-2 border" required />
                <label className="flex items-center">
                    <input type="checkbox" name="waterfront" checked={formData.waterfront} onChange={handleChange} className="mr-2" />
                    Waterfront
                </label>
                <input type="number" name="view" placeholder="View (0-4)" value={formData.view} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="condition" placeholder="Condition (1-5)" value={formData.condition} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="grade" placeholder="Grade (1-13)" value={formData.grade} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="sqft_above" placeholder="Square Feet Above" value={formData.sqft_above} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="sqft_basement" placeholder="Square Feet Basement" value={formData.sqft_basement} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="yr_built" placeholder="Year Built" value={formData.yr_built} onChange={handleChange} className="w-full p-2 border" required />
                <input type="number" name="yr_renovated" placeholder="Year Renovated" value={formData.yr_renovated} onChange={handleChange} className="w-full p-2 border" />
                <input type="text" name="zipcode" placeholder="Zip Code" value={formData.zipcode} onChange={handleChange} className="w-full p-2 border" required />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white">Predict Price</button>
            </form>
            {predictedPrice && <div className="mt-4 text-lg">Predicted Price: ${predictedPrice}</div>}
        </div>
    );
};

export default HousePriceForm;