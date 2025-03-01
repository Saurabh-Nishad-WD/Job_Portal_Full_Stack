
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Application from './pages/Application'
import ApplyJob from './pages/ApplyJob'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/apply-job' element = {<ApplyJob/>} />
      <Route path='/application' element = {<Application/>} />
    </Routes>
    </>
  )
}

export default App
