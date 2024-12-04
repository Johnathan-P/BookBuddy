import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/books'
import Register from './pages/register'
import Account from './pages/account'
import Login from './pages/login'
import BookID from './pages/bookid'

function App() {
  const [token, setToken] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/books/:id" element={<BookID/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
