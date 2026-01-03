import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';


import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/Sidebar';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className='flex flex-col mx-auto w-full justify-center items-center'>
      <SidebarProvider>
        <div className='min-h-screen flex flex-col'>
          <ScrollToTop />
          <NavBar />
          <AppSidebar />
          <div className='flex-grow container max-w-6xl mx-auto px-4 py-8'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<div className="py-8">About</div>} />
              <Route path="/contact" element={<div className="py-8">Contact</div>} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App
