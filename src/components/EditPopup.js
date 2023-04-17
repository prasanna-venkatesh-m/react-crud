import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const EditPopup=(props)=>
{
    const initialstate={employeename:'',
    age:'',
    emailId:'',
    department: '',
    city:''}
    const[employeedata,setEmployeedata]=useState(props.employeedata)

    useEffect(()=>setEmployeedata(props.employeedata),[props.employeedata])

    const onChangeText=(e)=>
    {
        const{name,value}= e.target
        setEmployeedata({
            ...employeedata,
            [name]:value
        })
    }

    const handleUpdate=()=>{
        alert(employeedata.employeename+employeedata.age+employeedata.emailID+employeedata.department+employeedata.city);
        props.updateEmployee(employeedata);
        setEmployeedata(initialstate);
        props.closeeditpopup();
    }

    return(
        props.editpop && 

        <div className="editpopup">
            <div class="modal-content">
            <div class="modal-header">
                 <h5 class="modal-title">Edit Employee</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.closeeditpopup}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                    <input type="text" class="form-control" name="employeename" value={employeedata.employeename} placeholder="Employee name" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="age" value={employeedata.age} placeholder="Employee Age" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="emailID" value={employeedata.emailID} placeholder="Employee Email" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="department" value={employeedata.department} placeholder="Department" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="city" value={employeedata.city} placeholder="City" onChange={onChangeText}></input><br></br>
                </div>
            {/* <div class="modal-body">
                <input type="text" class="form-control" value={employeedata.employeename} placeholder="Employee name"></input><br></br>
                <input type="text" class="form-control" value={employeedata.age} placeholder="Employee Age"></input><br></br>
                <input type="text" class="form-control" value={employeedata.emailID} placeholder="Employee Email"></input><br></br>
                <input type="text" class="form-control" value={employeedata.department} placeholder="Department"></input><br></br>
                <input type="text" class="form-control" value={employeedata.city} placeholder="City"></input><br></br>
            </div> */}
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={()=>handleUpdate()}>Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.closeeditpopup}>Close</button>
            </div>
            </div>   
        </div>
    )
}

export default EditPopup;