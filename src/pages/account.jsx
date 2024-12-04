import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function account()   {

    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [id, setID] = useState("");
    const [books, setBooks] = useState([]);
    async function GETME()
    {
        const token = localStorage.getItem("token");
        console.log(token);
        const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"
        try{
            const response = await fetch(api+'/api/users/me',{
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },          
            });
            const result = await response.json();
            setfirstName(result.firstname);
            setlastName(result.lastname);
            setID(result.email);
            setBooks(...[result.books]);
            console.log(result);
        }
    
        catch(error){console.log(error)}
    }

    return (
        <>
            <button onClick={GETME}>REVEAL INFORMATION</button>

            <h1>
                first name: {firstname} <br/>
                last name: {lastname} <br/>
                email: {id}<br/>
            </h1>
        </>
    )
}