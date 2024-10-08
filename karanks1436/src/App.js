import firebase from "./Firebase"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Blogs from './Blogs';
import Gallery from './Gallery';
import Foot from './Foot';
import Login from './Login';
import Register from './Register';
import Loginwithgoogle from "./Loginwithgoogle";
import Todo from "./Todo";
import Game from "./Game";
import BMICalculator from "./Bmi";

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Navbar' element={<Navbar/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Blogs' element={<Blogs/>} />
    <Route path='/Gallery' element={<Gallery/>} />
    <Route path='/Foot' element={<Foot/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/Loginwithgoogle' element={<Loginwithgoogle/>} />
    <Route path='/Todo' element={<Todo />} />
    <Route path='/Bmi' element={<BMICalculator />} />
    <Route path='/Game' element={<Game />} />




    </Routes>
  </Router>
  );
}

export default App;
