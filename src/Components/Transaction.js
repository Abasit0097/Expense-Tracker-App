import React, {useContext} from 'react';
import { Context } from './Context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Context);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.description} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}