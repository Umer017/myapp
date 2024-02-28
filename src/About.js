import axios from "axios";
import Contact from "./Contact";
import React, { useEffect, useState }  from "react";
import EmployeeModel from "./EmployeeModel";
const cors = require("cors");
const About = () =>{

    //app.use(require("cors")());
    
    // app.use(
    //   cors({
    //     origin: ["http://localhost:8081", "http://localhost:8081/images"],
    //     credentials: true
    //   })
    // );
    const headers = {
        'Content-Type': 'text/plain'
    };
    const users=[{userId:'1',userName:'James'},
    {userId:'2',userName:'John'},
    {userId:'3',userName:'Bruce'}]

    const [employees,setEmployees] = useState([]);
    const [formvalue,setFormvalue] = useState({
        name:"",
        salary:""
    })

    const handlechange = (e) =>{
        setFormvalue({...formvalue,[e.target.name]: e.target.value});
       // console.log(formvalue);
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        axios.post('https://localhost:7024/api/Employees',{name:formvalue.name, salary:formvalue.salary}).then("success")
       // console.log(e);
        console.log(formvalue);
    }

    useEffect(()=>{
        axios.get('https://localhost:7024/api/Employees')
            .then(response => {
                console.log("employees: ", response.data);
                setEmployees([...employees, ...response.data]);
             })
    },[])

return(
    <div>
    <h1>Hello</h1>
    <Contact name="divya" address="new york" users={users}/>
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>salary</th>
            </tr>
            {employees.map((item,index)=>{
            return(<tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
            </tr>)
            })}
        </table>

        <form onSubmit={handlesubmit}>
        <input type="text" name="name" onChange={handlechange}></input>
            <input type="text" name="salary" onChange={handlechange}/>
            <button type="submit">Add employee</button>
        </form>
          

    </div>
    </div>
)
}

export default About;