import React, { useState } from "react";

export const AddContact = ()=>{
    const [pwd,setPwd] = useState('');
    const [message,setMessage] = useState('');
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }
    const addPwd = (password)=>{
        setPwd(password);
        if(password.length===0){
            setMessage('');
            return;
        }
        if(password.length<8){
            setMessage("password too short")
        } else if(password.length>=8){
            if(!containsSpecialChars(password)){
                setMessage("Must contain an special character")
            }else{
                setMessage("")
            }
        }else{
            setMessage("")
        }
        console.log(`6--> ${password}`);
    }
    
    return (
        <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">

          <div className="field">
            <label>Password</label>
            <input
              type="text"
              name="email"
              placeholder="Password"
              value={pwd}
              onChange={(e) => addPwd(e.target.value)}
            />
          </div>
          <p>{message}</p>
          <button className="ui button blue">Add</button>
        </form>
      </div>
      );
}