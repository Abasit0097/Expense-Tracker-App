import React from 'react'

export const History = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ol className="list">
                <li className="plus">
                    Salary
                    <span>$1,000</span>
                    <button className="delete-btn">x</button>
                </li>
                <li className="minus">
                    Utility
                    <span>-$200</span>
                    <button className="delete-btn">x</button>


                </li>

            </ol>
        </div>
    )
}
