import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InvestmentPage from './components/InvestmentPage';
import SavingsPage from './components/SavingsPage';
import SignUpPage from './components/SignUpPage';

function App() {

  const Tier = {
    Tier1: 10000,
    Tier2: 20000,
    Tier3: 30000,
  };

  const [user, setUser] = useState({
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Tier: null,
    AmountInvested: null,
    Reward: null,
    TotalWithdrawable: null
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <InvestmentPage user={this.user}/>
        <SignUpPage user={this.user}/>
        <SavingsPage user={this.user}/>
      </section>
    </div>
  );
}

export default App;
