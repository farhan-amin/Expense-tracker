import React from 'react';
import './App.css';
import { Header } from "./Components/Header"
import { Balance } from './Components/Balance'
import { AccountDetail } from './Components/AccountDetail'
import {TransactionHistory} from './Components/TransactionHistory'
import {AddTransaction } from './Components/AddTransaction'

import { GlobalProvider } from './Context/GlobalState'; 
function App() {
  return ( 
    
    <GlobalProvider>
      <div className='header'>
    <Header />
    <div className= 'container'>
      <Balance />
      <AccountDetail />
      <TransactionHistory />
      <AddTransaction />
     
    </div> 
    </div>
    </GlobalProvider>
    
  );
}

export default App;

//URL: http://expansetrackerapp_farhan.surge.sh
