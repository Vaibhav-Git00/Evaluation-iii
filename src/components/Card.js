import React, { useState } from 'react';
import { PlusCircle, DollarSign, Calendar, Tag, Trash2 } from 'lucide-react';
import './Card.css';

export function ExpenseManager() {
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('incoming');

  const handleSaveExpense = (e) => {
    e.preventDefault();
    if (!description || !value) return;

    const newExpense = {
      id: Date.now(),
      description,
      value: parseFloat(value),
      date: new Date().toISOString().split('T')[0],
      type,
    };

    if (type === 'incoming') {
      setIncoming([...incoming, newExpense]);
    } else {
      setOutgoing([...outgoing, newExpense]);
    }

    setDescription('');
    setValue('');
    setType('incoming');
  };

  const handleDeleteExpense = (id, type) => {
    if (type === 'incoming') {
      setIncoming(incoming.filter((expense) => expense.id !== id));
    } else {
      setOutgoing(outgoing.filter((expense) => expense.id !== id));
    }
  };

  const totalIncoming = incoming.reduce((sum, expense) => sum + expense.value, 0);
  const totalOutgoing = outgoing.reduce((sum, expense) => sum + expense.value, 0);
  const total = totalIncoming - totalOutgoing;

  return (
    <div className="container">
      <h1 className="header">Expense-Tracker</h1> {/* Added header */}

      <div className="card">
        <div className="total-container">
          <div className="total-section">
            <h4>Incoming</h4>
            <div className="total-amount">${totalIncoming.toFixed(2)}</div>
          </div>
          <div className="total-section">
            <h4>Outgoing</h4>
            <div className="total-amount">${totalOutgoing.toFixed(2)}</div>
          </div>
          <div className="total-section">
            <h4>Total</h4>
            <div className="total-amount">${total.toFixed(2)}</div>
          </div>
        </div>

        <form onSubmit={handleSaveExpense}>
          <div className="form-group">
            <label className="form-label">Description</label>
            <div className="input-icon-wrapper">
              <Tag />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Value</label>
            <div className="input-icon-wrapper">
              <DollarSign />
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Type</label>
            <div className="radio-buttons">
              <label className="radio-label">
                <input
                  type="radio"
                  value="incoming"
                  checked={type === 'incoming'}
                  onChange={() => setType('incoming')}
                />
                Incoming
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="outgoing"
                  checked={type === 'outgoing'}
                  onChange={() => setType('outgoing')}
                />
                Outgoing
              </label>
            </div>
          </div>

          <button type="submit" className="button">
            <PlusCircle />
            Save
          </button>
        </form>

        <div className="transaction-list">
          <div className="transaction-section">
            <h5 className="highlighted">Incoming</h5>
            {incoming.map((expense) => (
              <div key={expense.id} className="transaction-item">
                <div>
                  <h4>{expense.description}</h4>
                  <p>${expense.value.toFixed(2)}</p>
                  <p><Calendar /> {expense.date}</p>
                </div>
                <div>
                  <button onClick={() => handleDeleteExpense(expense.id, 'incoming')}>
                    <Trash2 /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="transaction-section">
            <h5 className="highlighted">Outgoing</h5>
            {outgoing.map((expense) => (
              <div key={expense.id} className="transaction-item">
                <div>
                  <h4>{expense.description}</h4>
                  <p>${expense.value.toFixed(2)}</p>
                  <p><Calendar /> {expense.date}</p>
                </div>
                <div>
                  <button onClick={() => handleDeleteExpense(expense.id, 'outgoing')}>
                    <Trash2 /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseManager;