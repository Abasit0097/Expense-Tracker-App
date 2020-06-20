import React, { useState, useContext } from 'react'
import { Context } from './Context/GlobalState';

export const AddTransaction = () => {
    const [description, setdescription] = useState();
    const [amount, setamount] = useState();

    const {addTransaction} = useContext(Context);

    function Des (event) {
        setdescription(event.target.value)
    }

    function Amu (event) {
        setamount(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault();

        if (+amount === 0) {
        alert ("Pease enter Valid Number")
        return false;
    } 
    if (description === undefined) {
        alert ("Pease enter Valid Description")
        return false;
    } 

        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            description,
            amount: +amount
        }
        
        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Details of Transaction" 
                    value={description} onChange={Des} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount <br/> Please enter (-) with expense
                    </label>
                    <input type="number" id="transactionamoun" placeholder="Enter Transaction Amount"
                    value={amount} onChange={Amu} />
                </div>
                <button className="btn">Add New Transaction</button>
            </form>
        </div>
    )
}
