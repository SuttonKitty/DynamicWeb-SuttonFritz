import {Routes, Route} from 'react-router-dom'

import Logo from './components/Logo'
import Header from './components/Header'
import Footer from './components/Footer'

import MoiPage from './pages/MoiPage'
import ProjetsPage from './pages/ProjetsPage'
import RevenuPage from './pages/RevenuPage'
import EnchantePage from './pages/EnchantePage'
import PhotosPage from './pages/PhotosPage'

import './index.css'

const App = () => {
  
  return (
    <div>
      <div>
        <Logo />
      </div>

      <div>
        <Header />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<EnchantePage />} />
          <Route path="/N°1 moi" element={<MoiPage />} />
          <Route path="/N°2 projets" element={<ProjetsPage />} />
          <Route path="/N°3 revenu" element={<RevenuPage />} />
          <Route path="/N°4 photos" element={<PhotosPage />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
