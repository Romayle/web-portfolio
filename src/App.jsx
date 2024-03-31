import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs/Blogs'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>
    </>
  )
}

export default App
