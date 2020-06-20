import React, { useContext } from 'react';
import { Context } from './Context/GlobalState';


export const NetAmount = () => {
const { transactions } = useContext(Context);

const amounts = transactions.map(transaction => transaction.amount);

const total = amounts.reduce((acc, item) => (acc += item), 0);

return(
    <div className="avaliableblnc">
         <h4>Avaliable Balance</h4>
         <h1>${total}</h1>
    </div>
)
}