import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/web-portfolio/' element={<Home />}/>
        <Route path='/web-portfolio/about' element={<About />}/>
        <Route path='/web-portfolio/projects' element={<Projects />}/>
        <Route path='/web-portfolio/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
