import React, { useState } from "react";


function Form({addExpense}){
        const [description, setDescription] = useState('');
        const [amount, setAmount] = useState('');
      

    const handlesubmit = (e) => {
        e.preventDefault();
        addExpense({description, amount: parseFloat(amount), id: Date.now()});
        setDescription('');
        setAmount('');
      };

    return(
      <>
        <form onSubmit={handlesubmit}>
            <input type="text" value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter description"/>

            <input type="text" value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount"/>

            <button type="submit">Add Expense</button>
        </form>
        
        
      </>

    );
}

export default Form;