
import React from 'react';
import ReactDOM from 'react-dom/client';
import image from "./images/galaxy2.jpg";
import "./App.css";
import { useState } from 'react';



function App() {
  return (
    <div  style={{backgroundImage: `url(${image})`,
    height:'100vh',
    backgroundSize:'cover',
    backgroundRepeat : 'no-repeat',
    backgroundPosition:'centre',
    position: 'static'
    }}>
      <Form/>
    </div>
  );
}

function SayHello(props) {
  return (
    <div  style={{backgroundImage: `url(${image})`,
    height:'100vh',
    backgroundSize:'cover',
    backgroundRepeat : 'no-repeat',
    backgroundPosition:'centre',
    position: 'static'
    }}>
      <p className='He'>Hello! {props.username}</p>
    </div>
  );
}

function submited(name){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SayHello username={name}/>);
}

function Form(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const handleSubmit = (event)=>{
  event.preventDefault();
  submited(username);
  setPassword("");
  setUsername("");
}

 return( <div style={{
    backgroundColor:'darkgrey',
    width:'25%',
    height:'40%',
    position:'absolute',
    marginLeft:'35%',
    marginTop:'15%',
    
  }}>
    <p className='Login'>Login</p>
    <form onSubmit={handleSubmit }>
        <label className='Lab'>username:<input type="text" className='In'
        name='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label className='Lab'>password: <input type="text" className='In'
        name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <input type='submit' className='Submit'/>
    </form>
  </div>);
}

export default App;
