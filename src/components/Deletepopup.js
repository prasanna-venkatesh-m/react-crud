import React, { useState } from "react";
import DisplayEmployee from "./DisplayEmployee";
import Apiall from "./Apiall";

const Deletepopup=(props)=>
{

    const callDeleteapi=()=>
    {
        props.deleteEmp(props.id);
        props.closedeletepopup();
    }

    return ( props.deletepopup &&
        <div className="editpopup">
            <div class="modal-content">
            <div class="modal-header">
                 <h5 class="modal-title">Delete Employee</h5><br></br>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.closedeletepopup}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p> Are you sure ?</p>
                <p> Do you want to delete this employee ?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" onClick={()=>callDeleteapi()}>Delete</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={props.closedeletepopup}>Close</button>
            </div>
            </div>   
        </div>
    )
}

export default Deletepopup;