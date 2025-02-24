import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarCard from './copmonents/NavbarCard.jsx'
import Post from './copmonents/Post.jsx'
import Books from './copmonents/Albums.jsx'
import Footer from './copmonents/Footer.jsx'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarCard />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/post' element={<Post />} />
        <Route path='/book-list' element={<Books />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  </StrictMode>
)

// npm i react-router-dom
