import React from "react";

function Item({expense}){
    return(
        <div className="expense-item">
        {expense.description}: R{expense.amount.toFixed(2)} 
        </div>
    );

}

export default Item;