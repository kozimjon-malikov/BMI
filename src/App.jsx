import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [sm, setSm] = useState("");
  const [kg, setGk] = useState("");
  const [doc, setDoc] = useState([]);
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      sm: sm,
      kg: kg,
      main: (kg / Math.pow(sm / 100, 2)).toFixed(2),
    };
    newdoc(data);
    resetdata();
  };
  const resetdata = () => {
    setSm("");
    setGk("");
  };
  const newdoc = (data) => {
    console.log(data);
    setDoc((prev) => {
      return [data];
    });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="text-center">BMI test</h2>
        <form onSubmit={handleSave}>
          <div className="form-control">
            <label>
              <p>Height:(bo'yingiz)</p>
              <input
                type="number"
                onChange={(e) => setSm(e.target.value)}
                value={sm}
                required
                placeholder="__sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              <p>Weight:(vazningiz)</p>
              <input
                type="number"
                onChange={(e) => setGk(e.target.value)}
                value={kg}
                required
                placeholder="__kg"
              />
            </label>
          </div>
          <button className="btn">Check (tekshirish)</button>
        </form>
      </div>
      <h2>Doctor:</h2>
      <div className="doctor">
        <p>
          Your BMI:
          {doc.map((items) => (
            <span>{items.main}</span>
          ))}
        </p>
      </div>
      <div className="box">
        <details>
          <summary>👉 More details...</summary>
          <p>Underweight={'<'}18.5 </p>
          <p>Normal weight = 18.5–24.9</p>
          <p>Overweight = 25–29.9</p>
          <p>Obesity = BMI of 30 or greater</p>
        </details>
      </div>
    </div>
  );
}

export default App;
