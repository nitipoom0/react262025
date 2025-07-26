import { useRef, useState } from "react";
import './bmi.css'; // Make sure to create Bmi.css in the same directory

function BmiText({ bmi }) {
    let imageSrc = "";
    let statusText = "";

    if (bmi < 18.5 && bmi !== 0) { // Added bmi !== 0 to prevent displaying before calculation
        imageSrc = "under.png";
        statusText = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9 && bmi !== 0) {
        imageSrc = "Normal.jpg";
        statusText = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9 && bmi !== 0) {
        imageSrc = "over.png"; // Assuming you have an 'over.png' for overweight
        statusText = "Overweight";
    } else if (bmi >= 30 && bmi !== 0) {
        imageSrc = "fat.webp";
        statusText = "Obese"; // Changed from Overweight to Obese for BMI > 30
    }

    if (bmi === 0) {
        return <p className="bmi-status-placeholder">Enter your details to calculate BMI.</p>;
    }

    return (
        <div className="bmi-result">
            {imageSrc && <img src={imageSrc} alt={statusText} className="bmi-image" />}
            <h2 className="bmi-status-text">{statusText}</h2>
        </div>
    );
}

export default function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi, setBmi] = useState(0.0);

    function calBmi() {
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value) / 100;

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
            alert("Please enter valid positive numbers for weight and height.");
            setBmi(0.0);
            return;
        }
        setBmi(w / (h * h));
    }

    return (
        <div className="bmi-container">
            <h1 className="app-title">BMI Calculator</h1>
            <div className="input-group">
                <label htmlFor="weight">Weight:</label>
                <input id="weight" ref={w_inputRef} type="number" placeholder="Enter weight" />
                <span className="unit">kg</span>
            </div>
            <div className="input-group">
                <label htmlFor="height">Height:</label>
                <input id="height" ref={h_inputRef} type="number" placeholder="Enter height" />
                <span className="unit">cm</span>
            </div>
            <button onClick={calBmi} className="calculate-button">Calculate BMI</button>
            <p className="bmi-value">BMI Value: <span>{bmi.toFixed(2)}</span></p>
            <BmiText bmi={bmi} />
        </div>
    );
}