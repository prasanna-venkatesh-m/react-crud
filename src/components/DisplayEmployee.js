import React, { useEffect } from "react";
import { useState } from "react";
import EditPopup from "./EditPopup";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFunction from "./Deletepopup"
import Deletepopup from "./Deletepopup";

const DisplayEmployee = (props) => {
  const [editpopup, seteditPopup] = useState(false);
  const showeditpopup = () => {
    seteditPopup(!editpopup);
  };
  const [deletepopup, setedeletePopup] = useState({show: false,id: 0});
  const showdeletepopup = () => {
    setedeletePopup({show: (!deletepopup.show),id: 0});
  };

  const [employeelist, setEmployeelist] = useState([]);

  const length=employeelist.length;

  const callApifunc=async()=>{
    let res=await fetch('https://192.168.1.119:45455/api/Employee2');
        let resJson=await res.json();
        setEmployeelist(resJson);
  }

  const handleEditclick=(employeeID)=>{
    props.findEmployeebyid(employeeID);
    console.log(props.singleEmp);
    seteditPopup(true);
  }

  const updateEmployee=(employee)=>{
    props.updateEmployee(employee);
    callApifunc();
  }

  const deleteEmp=(id)=>
  {
    props.deleteEmployee(id);
    callApifunc();
  }

  useEffect(() => {callApifunc()},[length,props.singleEmp,editpopup,deletepopup]);

  return (
    <div className="displayemployee">
      <EditPopup employeedata={props.singleEmp} updateEmployee={updateEmployee} editpop={editpopup} closeeditpopup={showeditpopup} />
      <Deletepopup deletepopup={deletepopup.show} id={deletepopup.id} closedeletepopup={showdeletepopup} deleteEmp={deleteEmp}/>
      <div className="displayemployeetable">
        <table class="table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Age</th>
              <th>Employee Email ID</th>
              <th>Employee Department</th>
              <th>Employee City</th>
              <th colSpan='2'>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {employeelist.map(item=>(
                <tr key={item.employeeID}> 
                    <td>{item.employeename}</td>
                    <td>{item.age}</td>
                    <td>{item.emailID}</td>
                    <td>{item.department}</td>
                    <td>{item.city}</td>
                    <td><button
                  type="button" class="btn btn-primary"
                  onClick={() => {
                    handleEditclick(item.employeeID)
                  }}
                >
                  Edit
                </button></td>
                <td>
                <button type="button" class="btn btn-danger" onClick={()=>setedeletePopup({show :true,id: item.employeeID})}>Delete</button> 
                </td>
                </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayEmployee;
