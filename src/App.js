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
  default:
    return state;
}
}
export default function App() {
 const [{isActive,balance,loan},dispatch]= useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="container text-center my-3">
      <h1>WELCOME TO REACT BANK</h1>
      <div className="row bg-secondary p-5">
        <div className="col text-white h3">Balance : {balance}</div>
        <div className="col text-white h3">Loan Amount : {}</div>
      </div>
      <div className="row my-3">
        <button 
          className="btn btn-primary m-1 col-3" 
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
        
      </div>
      </div>
    </div>
  );
}
