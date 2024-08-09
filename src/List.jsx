import React from "react";
import Item from "./Item";


function List({expenses}){

    return(
       <div className="expense-list">
          {expenses.map((expense) => (
            <Item key={expense.id} expense={expense}/>

          ))}
        </div>
    );
}
    
export default List;