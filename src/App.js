import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar';
import Page from './Components/Page';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// import Page from './Components/Page'; 
function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
       <Page />
      <Routes>
      {/* <Route path='/' element={<Page/>} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;