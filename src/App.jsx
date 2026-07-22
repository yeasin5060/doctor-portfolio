import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeServiceDetails from "./components/HomeServiceDetails"


function App() {


  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/service" element = {<Service/>}/>
        <Route path="/services/:slug" element={<HomeServiceDetails/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
