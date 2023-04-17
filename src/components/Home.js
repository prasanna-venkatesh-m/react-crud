import React, { useEffect, useState } from 'react'
import ShowPopup from './SavePopup'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayEmployee from './DisplayEmployee';
import Deletepopup from './Deletepopup';
import Apiall from './Apiall';

const Home=(props)=>{

    const[savepopup, setsavePopup]=useState(false)
   
    const showsavepopup=()=>{
        setsavePopup(!savepopup);
    }

    return(
        <div className='mainDiv'>
            <div className='homePage'>
                <button type="button" class="btn btn-primary buttons" onClick={()=>{setsavePopup(true)}}>Add User</button>
                <ShowPopup showpop={savepopup} closepopup={showsavepopup} callApiadd={(employee)=>props.addEmployee(employee)}/>
            </div>
        </div>
    )
}

export default Home;