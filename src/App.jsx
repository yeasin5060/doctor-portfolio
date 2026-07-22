import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeServiceDetails from "./components/HomeServiceDetails"
import HomeArticalesDetails from "./components/HomeArticalesDetails"
import ServiceDetails from "./components/ServiceDetails"


function App() {


  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/service" element = {<Service/>}/>
        <Route path="/service/:slug" element={<HomeServiceDetails/>} />
        <Route path="/article/:slug" element={<HomeArticalesDetails/>} />
        <Route path="/services/service/:slug" element={<ServiceDetails/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
