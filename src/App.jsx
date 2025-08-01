import React from 'react' //rafce
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='our program' title='What We Offer'/>
        <Programs/>
        <About/>
         <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get In Touch'/>
          <Contact/>
          <Footer/>
      </div>
      
    </div>
  )
}

export default App