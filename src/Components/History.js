import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { Context } from './Context/GlobalState';

export const History = () => {
  const { transactions } = useContext(Context);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}