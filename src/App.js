import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Card from './components/Card';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Sign';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Main/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signups" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
