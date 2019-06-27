import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Homepage from './Pages/Home/Homepage';
import Services from './Pages/Services/Services';
import Dashboard from './Pages/Dashboard/Dashboard';
import TransactionList from './Pages/Transaction/TransactionList';
import CardBrief from './Pages/Common/CardBrief';
import AddPing from './Pages/Common/AddPing';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Home" component={Homepage} />
        <Route path="/Home/Dashboard" component={Dashboard} />
        <Route path="/Home/Service" component={Services} />
        <Route path="/Home/Transaction" component={TransactionList} />
        <Route path="/Home/CardBrief" component={CardBrief} />
        <Route path="/Home/AddPing" component={AddPing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
