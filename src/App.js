import "../src/index.css";
import React, { useReducer } from "react";
const initialState = {
  isActive:false,
  balance:0,
  loan:0,
}
function reducer(state,action){
switch (action.type) {
  case 'open_account':
    return {...state, isActive:true, balance:300};
  case 'deposit':
      return {...state, balance:state.balance+50};
  case 'withdraw':
      if(state.balance > 0) return {...state, balance:state.balance-50};
      return state;
  case 'get_loan':
      if(state.loan === 0) return {...state, balance:state.balance+5000, loan:5000};
      return state;
  case 'pay_loan':
      if(state.balance >= 5000) return {...state, balance:state.balance-5000, loan:state.loan-5000};
      return state;
  case 'close_account':
      if(state.balance ===0 && state.loan ===0) return {...initialState};
      return state;
  default:
    return state;
}
}
export default function App() {
 const [{isActive,balance,loan},dispatch]= useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="container text-center my-5">
      <h1 className="text-white">SIMPLE BANK ACCOUNT</h1>
      <div className="row p-5 mt-5">
        <div className="col text-white h3">Balance : {balance}</div>
        <div className="col text-white h3">Loan Amount : {loan}</div>
      </div>
      <div className="row my-5 justify-content-evenly">
        <button 
          className="btn btn-outline-success m-1 col-3" 
          onClick={()=>dispatch({type:'open_account'})}
          disabled={isActive}>
            Open Account
        </button>
        <button 
          className="btn btn-primary m-1 col-3" 
          onClick={()=>dispatch({type:'deposit'})}
          disabled={!isActive}>
            Deposit 50
        </button>
        <button 
          className="btn btn-primary m-1 col-3" 
          onClick={()=>dispatch({type:'withdraw'})}
          disabled={!isActive}>
            Withdraw 50
        </button>
        <button 
          className="btn btn-primary m-1 col-3" 
          onClick={()=>dispatch({type:'get_loan'})}
          disabled={!isActive}>
            Get Loan
        </button>
        <button 
          className="btn btn-primary m-1 col-3" 
          onClick={()=>dispatch({type:'pay_loan'})}
          disabled={!isActive}>
            Pay Loan
        </button>
        <button 
          className="btn btn-outline-danger m-1 col-3" 
          onClick={()=>dispatch({type:'close_account'})}
          disabled={!isActive}>
            Close Account
        </button>
        
      </div>
      <p>Note:</p>
      <p>1. 500 will be credited when you open the account</p>
      <p>2. 5000 will be credited when you get a loan and you can get ony a single loan</p>
      <p>3. you can pay the loan amount 5000 from your bank account</p>
      <p>4. you can close the bank account after you clear the loan and withdraw all the amount</p>
      </div>
    </div>
  );
}
