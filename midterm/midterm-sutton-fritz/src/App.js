// import cx from 'classnames'
// Always import libraries or named expots from that library from node modules first
import {Routes, Route} from 'react-router-dom'
// Then import your components
// import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Footer from './components/Footer'
// import scrollYProgress from './components/Scroll'



import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import RandomGenPage from './pages/RandomGenPage'
import LandingPage from './pages/LandingPage'


// then your CSS and or DATA files
import './index.css'
// data example
// import dropdownData from './data/dropdown-data'

const App = () => {
  return (
    <div className="container flex flex-col flext-wrap gap-4 mt-4">
      {/* <div>
        <scrollYProgress />
      </div> */}
      <div>
        <Logo />
      </div>
      <hr className='w-[90%] border-dotted border-[black]'/>
      <div>
        <Header />
      </div>
      {/* <div className='sticky w-[100%] top-[1rem]'>
        <hr className='w-[90%] border-dotted border-[black]'/>
        <div>
          <Navigation />
        </div>
        <hr className='w-[90%] border-dotted border-[black]'/>
      </div> */}
      <hr className='w-[90%] border-dotted border-[black]'/>
      <div>
        <Navigation />
      </div>
      <hr className='w-[90%] border-dotted border-[black]'/>
      
      <div>
        <About />
      </div>
      <hr className='w-[90%] border-dotted border-[black]'/>

      {/* <div>
        <About />
      </div>
      <hr className='w-[90%] border-dotted border-[black]'/> */}

      <div>
        <Footer />
      </div>
      <hr className='w-[90%] border-dotted border-[black]'/>

      <div className="relative">
        <Routes>
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/randomGen" element={<RandomGenPage />} />
        </Routes>
      </div>

      
    </div>
  )
}

export default App
