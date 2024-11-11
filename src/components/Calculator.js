// Calculator.jsx

import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(0);
  const [afterTaxIncome, setAfterTaxIncome] = useState(0);

  const calculateTax = (incomeValue) => {
    let calculatedTax = 0;

    if (incomeValue > 1000000) {
      calculatedTax += (incomeValue - 1000000) * 0.30;
      incomeValue = 1000000;
    }
    if (incomeValue > 500000) {
      calculatedTax += (incomeValue - 500000) * 0.20;
      incomeValue = 500000;
    }
    if (incomeValue > 250000) {
      calculatedTax += (incomeValue - 250000) * 0.05;
    }

    return calculatedTax;
  };

  const handleCalculate = () => {
    const incomeValue = parseFloat(income);
    if (isNaN(incomeValue) || incomeValue < 0) {
      alert("Please enter a valid income amount");
      return;
    }

    const calculatedTax = calculateTax(incomeValue);
    const calculatedAfterTaxIncome = incomeValue - calculatedTax;

    setTax(calculatedTax);
    setAfterTaxIncome(calculatedAfterTaxIncome);
  };

  const handleReset = () => {
    setIncome('');
    setTax(0);
    setAfterTaxIncome(0);
  };

  return (
    <div className="container">
      <h1 className="title">India Income Tax Calculator</h1>
      <div className="inputContainer">
        <label className="label">Annual Income (INR):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income"
          className="input"
        />
      </div>
      <button onClick={handleCalculate} className="button">Calculate Tax</button>
      <button onClick={handleReset} className="resetButton">Reset</button>
      
      <div className="resultContainer">
        <p className="resultText"><strong>Tax:</strong> ₹{tax.toFixed(2)}</p>
        <p className="resultText"><strong>After Tax Income:</strong> ₹{afterTaxIncome.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Calculator;
