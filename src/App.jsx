import './App.css'
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>

        <Header/>

        <Routes>
          <Route path='/search' element={<SearchPage/>}/>
            
          <Route path='/' element={<Home/>}/>     
        </Routes>

        <Footer/>

      </Router>
    
    </>
  )
}

export default App
