import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, description: "Salary", amount: 3000},
        {id: 2, description: "Dividend", amount: 500},
        {id: 3, description: "Bill", amount: -500},
        {id: 4, description: "Fees", amount: -1000},
    ]
}

export const Context = createContext(initialState);


const Provider = ({children} ) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
    }

    return(
    <Context.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
            {children}
    </Context.Provider>
    )
}

export default Provider;