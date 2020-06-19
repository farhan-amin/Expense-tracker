import React, { useState, useContext } from 'react';

// Import the Global state
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (Number(transactionAmount===0)){
            alert("please Enter A valid Amount");
            return false;
        }

        const newTransaction = {
            id: new Date().getTime(), description,
            transactionAmount: +transactionAmount
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
                    <input type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Transaction Name"
                        required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                        <br />
                        <small>(positive Value For Income: Negative For Expense)</small>

                    </label>
                    <input type="number"
                        id="transactionamount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        placeholder="Enter Amount For Transaction"
                        required="required"
                    />
                </div>
                <button   className="btn" >Add Transaction</button>
            
            </form>
        </div>
    )
}