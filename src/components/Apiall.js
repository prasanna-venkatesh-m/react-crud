import React, { useEffect, useState } from "react";
import Deletepopup from "./Deletepopup";
import DisplayEmployee from "./DisplayEmployee";
import Home from "./Home";
import axios from "axios";

const Apiall=()=>{
    const[states,setStates]=useState(0);

    const addEmployee=(employee)=>
    {
        axios.post('https://localhost:7258/api/Employee2',employee)
         .then(response =>{
        console.log(response); 
        window.location.reload(false);
    })
    .catch(error=>{
        console.log(error)
        alert("Error in Saving Employee");
    })
    }

    const deleteEmployee=(deleteid)=>
    {
        axios.delete(`https://localhost:7258/api/Employee2/${deleteid}`)
        .then(response =>{
        console.log(response);
        window.location.reload(false);
        })
        .catch(error=>{
        console.log(error)
        alert("Error in Deleting the Employee")
    })
        console.log("Deleted"+deleteid);
    }

    const[singleEmp, setSingleEmp]=useState({});

    useEffect(()=>{},[states])

    const findEmployeebyid=async(employeeID)=>
    {
        let result= await fetch(`https://localhost:7258/api/Employee2/${employeeID}`)
        let resultJson=await result.json();
        setSingleEmp({employeeID: resultJson.employeeID,employeename: resultJson.employeename, age: resultJson.age, department: resultJson.department, emailID: resultJson.emailID,city:resultJson.city});
    }

    const updateEmployee=(employee)=>
    {
        axios.put(`https://localhost:7258/api/Employee2/${employee.employeeID}`,employee)
        .then(response =>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
            alert("Error in saving Edited changes")
        })
    }

    return (
    <div>
        <Home addEmployee={(employee)=>addEmployee(employee)}/>
        <DisplayEmployee singleEmp={singleEmp} findEmployeebyid={findEmployeebyid} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee}/>
    </div>
    )
}

export default Apiall;