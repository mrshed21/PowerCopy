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
import Services from './pages/Services';
import SubCategoryPage from './pages/SubCategoryPage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <div className='flex flex-col w-full min-h-screen overflow-x-hidden'>
      <SidebarProvider>
        <div className='min-h-screen flex flex-col w-full'>
          <ScrollToTop />
          <NavBar />
          <AppSidebar />
          {/* <div className='grow container max-w-6xl mx-auto px-4 py-8'> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<div className="py-8">About</div>} />
              
              <Route path="/contact" element={<div className="py-8">Contact</div>} />
              <Route path="/kundservice" element={<Services />} />
              <Route path="/:category" element={<CategoryPage />} /> 
              <Route path="/:category/:subcategoryId" element={<SubCategoryPage />} /> 
              <Route path="/:category/:subcategoryId/:productId" element={<ProductPage />} />

              <Route path="/404" element={<PageNotFound />} />
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
