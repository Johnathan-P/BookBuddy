import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from "react";



export default function login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"

    async function LOGIN() {
        event.preventDefault();
        try{
            const response = await fetch(api+'/api/users/login',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password
              })            
            });
            const result = await response.json();
            console.log(result);
            if (result.token)
            {
                localStorage.setItem("token", result.token)
                navigate("/account")
            }
        }
        catch(error){console.log(error)}
    }

    return (
    <>
    <br></br>
    <br></br>
        <form onSubmit={LOGIN}>
            <label>
                Email:<br></br>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Password:<br></br>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </label>
            <br></br>
            <button type='submit'>Submit</button>
            <br></br>
        </form>
    </>
    )
}