import React, { useState } from 'react';
import './Expense.css'; // Assuming you will add your CSS styles here
import smaeImage from '../assets/smae.png'; // Ensure this path is correct

const ExpenseTracker = () => {
    const [data, setData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (category, index, value) => {
        setData(prevData => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [index]: value
            }
        }));
    };

    const validateInputs = () => {
        // Check if all fields are filled
        for (const category in data) {
            for (const value of Object.values(data[category])) {
                if (value.trim() === '') {
                    alert(`Please fill in all fields in the ${category} category.`);
                    return false; // Return false if any field is empty
                }
            }
        }
        return true; // Return true if all fields are filled
    };

    const storeData = () => {
        localStorage.setItem('expenseData', JSON.stringify(data));
        alert('Data saved successfully!');
        setData({}); // Reset data after saving
    };

    const handlePayButtonClick = () => {
        if (validateInputs()) {
            storeData();
        }
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={smaeImage} alt="Dashboard Icon" className="dashboard-icon" />
                </div>
                <div className="user">
                    <span>UDAY!</span>
                    <i className="notification-icon">🔔</i>
                </div>
            </header>

            <button className="fab" onClick={toggleModal}>+</button>

            {modalOpen && (
                <div className="modal" id="navModal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <ul>
                            <li><a href="/FINANCE_MANAGER/Dashboard/hh.html">Dashboard</a></li>
                            <li><a href="">Expense</a></li>
                            <li><a href="">Card</a></li>
                            <li><a href="">Transactions</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Settings</a></li>
                            <li><a href="">LogOut</a></li>
                        </ul>
                    </div>
                </div>
            )}

            <main>
                <section className="content">
                    {['INCOMES', 'DEBT & LOAN PAYMENTS', 'HOUSING & UTILITIES', 'LIVING EXPENSES', 'MISCELLANEOUS EXPENSES', 'PAYMENTS'].map((category, index) => (
                        <div className="category" key={index}>
                            <h2>{category}</h2>
                            {Array.from({ length: category === 'PAYMENTS' ? 3 : 4 }).map((_, i) => (
                                <input
                                    key={i}
                                    type={category === 'PAYMENTS' && i === 1 ? 'date' : 'text'}
                                    placeholder={category === 'PAYMENTS' && i === 2 ? 'Amount' : `${category} ${i + 1}`}
                                    value={data[category]?.[i] || ''}
                                    onChange={(e) => handleInputChange(category, i, e.target.value)}
                                />
                            ))}
                            {category === 'PAYMENTS' && <button onClick={handlePayButtonClick}>PAY</button>}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default ExpenseTracker;