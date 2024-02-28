import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

export function App() {
  const [empname,setEmpname] = useState("umer");
  const [mytext,setMytext] = useState("");
  const [show,setShow] = useState(false);

  var name = "xyz"
  const users=[{userId:'1',userName:'James'},
                {userId:'2',userName:'John'},
                {userId:'3',userName:'Bruce'}]
  function  handleClick(e){
    e == true ? setShow(e) : setShow(false)
    
  }
  const test=(e)=>{
    setMytext(e.target.value);
} 
  return (
    <div>
    <div className="App">
      Hello world {name}
      {/* <button onClick={handleClick}>button</button> */}
      {/* <button onClick={() => handleClick("abc")}>button</button> */}
      {name=="xyz" ?  <button onClick={() => handleClick("abc")}>button</button>:<p>You are not xyz </p>}
      {
        users.map((item,i)=>
                <div key={i}>{item.userName}</div>
                )
       }
      {name=="xyz" &&  <button onClick={() => handleClick("abc")}>button1</button>}
       <br></br>{empname}
       <input type='text' onChange={test}  value={mytext} onClick={() => setShow(false)} />
       <button onClick={()=> handleClick(!show)}>submit</button>
       {show ?<h1>{mytext}</h1>:null}
    </div>
    </div>
  );
}

class About extends React.Component
{
    
render(){

    let title="Heads of to all";
  
    return (
        
    <div>
        <p>Hello World</p><br/>
        <p>{title}</p>
    </div>)
} 
}


