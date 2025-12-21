import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
    <NavBar />
    <div className='flex-grow container mx-auto px-4 py-8'>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div className="py-8">About</div>} />
      <Route path="/contact" element={<div className="py-8">Contact</div>} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </div>

    <Footer />
    </div>
  )
}

export default App
