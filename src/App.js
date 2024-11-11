import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Card from './components/Card';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Sign';
import ExpenseTracker from './components/ExpenseTracker';
// import { Calculator } from 'lucide-react';
import Calculator from './components/Calculator';   

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Main/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signups" element={<SignUp/>}></Route>
        <Route path="/expensetracker" element={<ExpenseTracker/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
