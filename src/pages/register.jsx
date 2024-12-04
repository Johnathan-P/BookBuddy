import { Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";



export default function register() {
    let navigate = useNavigate();
    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"
    async function REGISTER() {
        event.preventDefault();
        try{
            const response = await fetch(api+'/api/users/register',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
              })            
            });
            const result = await response.json();
            console.log(result);
            alert('success!')
            navigate("/login")
        }
        catch(error){console.log(error)}
    }

    return (
    <>
    <br></br>
    <br></br>
        <form onSubmit={REGISTER}>
            <label>
                First Name:<br></br>
                <input type="text" value={firstname} onChange={(e)=>setfirstName(e.target.value)}></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Last Name:<br></br>
                <input type="text" value={lastname} onChange={(e)=>setlastName(e.target.value)}></input>
            </label>
            <br></br>
            <br></br>
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
            <Link to="/login">Already a user?</Link>
        </form>
    </>
    )
}