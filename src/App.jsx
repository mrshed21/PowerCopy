import './App.css'
import { Routes, Route } from 'react-router-dom';


// Importing components
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';


// Importing pages
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
    <div className='flex flex-col mx-auto w-full justify-center items-center'>
      <SidebarProvider>
        <div className='min-h-screen flex flex-col items-center'>
          <ScrollToTop />
          <NavBar />
          <AppSidebar />
          {/* <div className='grow container max-w-6xl mx-auto px-4 py-8'> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<div className="py-8">About</div>} />
              <Route path="/contact" element={<div className="py-8">Contact</div>} />
              <Route path="/:category" element={<CategoryPage />} /> 

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          {/* </div> */}

          <Footer />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App
