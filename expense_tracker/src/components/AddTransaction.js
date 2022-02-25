import React from "react";




export const AddTransaction=()=>{
    return(
        <>
        <h3>Add new transaction</h3>
        <form >
            <div className="form-control">
                <label for="text">Text</label>
                <input for="text" placeholder="enter text..."/>
            </div>

            <div className="form-control">
                <label for="amount">Amount <br/>  (negative-expense,positive-income)</label>
                <input for="number"  placeholder="enter amount..."/>
            </div>


        </form>
        
        </>
    )
}