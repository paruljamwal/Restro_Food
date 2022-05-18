import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import Main from './Components/Main';
import { useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">

    <Header></Header>
    <button className='change' onClick={()=>{setShow(!show)}}>{show ? "Add Items" : "Home page"}</button>
    {show ? <Main></Main> 
     : <Form></Form>}
    
  
    </div>
  );
}

export default App;
