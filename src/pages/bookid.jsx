import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function bookid() {
  const { id } = useParams(); // Get the book ID from the route
  const [book, setBook] = useState([]);

  const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"
  async function GETBOOK()
  {
    let newid = id.replace(":", "")
    console.log(newid);
    const response = await fetch(`${api}/api/books/${newid}`,{
        headers: {
          "Content-Type": "application/json",
        },      
      });
      const result = await response.json();
      console.log(result.book)
      setBook(result.book);
      
  }

  

  return (
    <div>
      
    </div>
  );
}
