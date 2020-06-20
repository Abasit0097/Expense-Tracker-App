import React, { useContext } from 'react'
import { Context } from './Context/GlobalState';


export const Nature = () => {
    const { transactions } = useContext(Context);

    const amounts = transactions.map(transaction => transaction.amount);


    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item)=> (acc +=item), 0);

        const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item)=> (acc +=item), 0);



    return (
        <div className="inc-exp-container">
            <div className="income">
                <h4>income</h4>
                <p className="money plus">
                    ${income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${expense}
                </p>
            </div>
            
        </div>
    )
}
