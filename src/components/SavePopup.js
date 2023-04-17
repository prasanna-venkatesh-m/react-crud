import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowPopup=(props)=>
{
    const initialstate={employeename:'',
    age:'',
    emailId:'',
    department: '',
    city:''}

    const[employee, setEmployee]=useState(initialstate)

    const onChangeText=(e)=>
    {
        const{name,value}= e.target
        setEmployee({
            ...employee,
            [name]:value
        })
    }

    const handleSave=()=>{
        alert(employee.employeename+employee.age+employee.emailId+employee.department+employee.city);
        props.callApiadd(employee);
        setEmployee(initialstate);
        props.closepopup();
    }

    return(
        props.showpop && 

        <div className="editpopup savepopup">
            <div class="modal-content">
            <div class="modal-header">
                    <h5 class="modal-title">Save Employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.closepopup}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" name="employeename" value={employee.employeename} placeholder="Employee name" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="age" value={employee.age} placeholder="Employee Age" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="emailId" value={employee.emailId} placeholder="Employee Email" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="department" value={employee.department} placeholder="Department" onChange={onChangeText}></input><br></br>
                    <input type="text" class="form-control" name="city" value={employee.city} placeholder="City" onChange={onChangeText}></input><br></br>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={()=>handleSave()}>Save</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.closepopup}>Close</button>
                </div>
            </div>   
        </div>
    )
}

export default ShowPopup;