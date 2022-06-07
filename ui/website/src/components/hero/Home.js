import React from 'react'
import HeroSection from '.'
import animatedroute from '../animatedroute'
import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import Testimonials from '../Testimonials/Index';
import FormSignup from '../FormSignup'
import Mission from '../Testimonials/Mission.js'
import Footer from '../Footer/Footer'
import Form from '../Form'
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import Holder from '../Holder';



const Home = () => {
 
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route path ="/" element={<HeroSection/>}>

          </Route>

          <Route path ="/signup" element={<Form/>}>

          </Route>

          <Route path ="/gallery" element={<Holder/>}>

          </Route>

          <Route path ="/mission" element={<Mission/>}>

          </Route>

          <Route path ="*" element={<HeroSection/>}>

          </Route>

        </Routes>
       
        <Testimonials />
        <Footer/>
      </Router>
    </div>
  )
}

export default Home