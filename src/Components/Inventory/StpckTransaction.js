import React from "react";
// import "./StockTransaction.css"; // Import external CSS
import { ArrowUp, ArrowDown } from "lucide-react";

const transactions = [
  {
    date: "21 Nov 24 . 06:53",
    balance: "Stock Balance 553 KGS",
    type: "Out",
    quantity: "5 KGS",
    price: "50 Rs",
    bgColor: "out-bg",
    icon: <ArrowUp className="icon up" />,
  },
  {
    date: "21 Nov 24 . 06:53",
    balance: "Stock Balance 553 KGS",
    type: "In",
    quantity: "5 KGS",
    price: "50 Rs",
    bgColor: "in-bg",
    icon: <ArrowDown className="icon down" />,
  },
];

const StockTransaction = () => {
  return (
    <div className="stock-container">
      <div className="header">
        <span>Date & Summary</span>
        <span>Stock Transaction</span>
        <span>Balance Stock</span>
      </div>

      {transactions.map((transaction, index) => (
        <div className="stock-card" key={index}>
          {/* Date & Summary */}
          <div className="date-summary">
            <p className="date">{transaction.date}</p>
            <p className="balance">{transaction.balance}</p>
          </div>

          {/* Stock Transaction */}
          <div className={`transaction ${transaction.bgColor}`}>
            {transaction.icon}
            <span className="status">{transaction.type}</span>
            <p className="details">
              {transaction.quantity} {transaction.price}
            </p>
          </div>

          {/* Balance Stock */}
          <div className="balance-stock">Bala: ₹0</div>
        </div>
      ))}
    </div>
  );
};

export default StockTransaction;
