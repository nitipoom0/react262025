import { useRef, useState } from "react";

function BmiText({ bmi }) {
    if (bmi < 18.5) {
        return (
            <div style={{ textAlign: "center" }}>
                <img src="under.png" height="200" alt="Underweight" />
                <h2 style={{ color: "#3498db" }}>Underweight</h2>
            </div>
        );
    }
    if (bmi > 30) {
        return (
            <div style={{ textAlign: "center" }}>
                <img src="fat.webp" height="200" alt="Overweight" />
                <h2 style={{ color: "#e74c3c" }}>Overweight</h2>
            </div>
        );
    }
    return (
        <div style={{ textAlign: "center" }}>
            <img src="Normal.jpg" height="200" alt="Normal" />
            <h2 style={{ color: "#2ecc71" }}>Normal</h2>
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
        if (!w || !h || h <= 0) {
            setBmi(0.0);
            return;
        }
        setBmi(w / (h * h));
    }

    return (
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            background: "#fff",
            fontFamily: "Segoe UI, Arial, sans-serif"
        }}>
            <h1 style={{ textAlign: "center", color: "#34495e" }}>BMI Calculator</h1>
            <div style={{ marginBottom: "16px" }}>
                <label>
                    Weight:
                    <input
                        ref={w_inputRef}
                        type="number"
                        min="1"
                        step="any"
                        placeholder="kg"
                        style={{
                            marginLeft: "8px",
                            padding: "6px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            width: "100px"
                        }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: "16px" }}>
                <label>
                    Height:
                    <input
                        ref={h_inputRef}
                        type="number"
                        min="1"
                        step="any"
                        placeholder="cm"
                        style={{
                            marginLeft: "8px",
                            padding: "6px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            width: "100px"
                        }}
                    />
                </label>
            </div>
            <button
                onClick={calBmi}
                style={{
                    width: "100%",
                    padding: "10px",
                    background: "#2980b9",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginBottom: "16px"
                }}
            >
                Calculate
            </button>
            <p style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#555",
                marginBottom: "16px"
            }}>
                BMI value: <span style={{ fontWeight: "bold" }}>{bmi.toFixed(2)}</span>
            </p>
            <BmiText bmi={bmi} />
        </div>
    );
}