import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import BookForm from './components/BookForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Card/>}/>
      <Route path='/bookForm' element={<BookForm/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
