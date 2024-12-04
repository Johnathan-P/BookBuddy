import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function books() {
  const [hasToken, setHasToken] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
    if (token)
        BOOKS();
  }, []);

  const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"

  async function BOOKS() {
      event.preventDefault();
      try{
          const response = await fetch(api+'/api/books',{
            headers: {
              "Content-Type": "application/json",
            },      
          });
          const result = await response.json();
          setBooks(result.books);
          localStorage.setItem('books',result.books);
          console.log(result);
      }
      catch(error){console.log(error)}
  }
  return (
    <>
      {hasToken ? (
        <>
        <h1>BOOKS</h1>
        <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/:${book.id}`}>{book.title}</Link>
          </li>
        ))}
        </ul>
        </>
      ) : (
        <>
          <Link to='/register'>Register</Link>
          <br />
          <Link to='/login'>Login</Link>
        </>
      )}
    </>
  );
}