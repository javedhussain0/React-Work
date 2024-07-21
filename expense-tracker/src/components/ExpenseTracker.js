import React from "react";
import { useState } from "react";
import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (input || amount) return;

    const newExpenses = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };
    setExpenses([...expenses, newExpenses]);
    setInput("");
    setAmount("");
  };
  return (
    <div>
      <div className="container">
        <h1>ExpenseTracker</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ExpenseTracker"
          type="text"
          className="ex-input"
        ></input>
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="number"
          placeholder="Amount"
        ></input>
        <br />
        <button onClick={addExpense} className="ex-btn">
          Add Expenses
        </button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <h3>{expense.title}</h3>
            <p>Amount: ${expense.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
