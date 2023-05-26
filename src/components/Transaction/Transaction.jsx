import PropTypes from 'prop-types';
import s from './Transaction.module.css';
import React from 'react';

const Transaction = ({ items }) => {
    return (
      <div>
        <h1 className={s.tittle}>4 - Historial de transacciones</h1>
      <div>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.header}>Type</th>
              <th className={s.header}>Amount</th>
              <th className={s.header}>Currency</th>
            </tr>
          </thead>
  
          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td className={s.td__letter}>{type}</td>
                <td className={s.td__letter}>{amount}</td>
                <td className={s.td__letter}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  };
// -----------------------
export default Transaction;
// -----------------------

Transaction.propType = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};
