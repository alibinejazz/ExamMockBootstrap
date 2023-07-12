import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import BookForm from './components/BookForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConfirmedPage from './components/ConfirmedPage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Card/>}/>
      <Route path='/bookForm/:id' element={<BookForm/>}/>
      <Route path='/confirmedbooking' element={<ConfirmedPage/>}/>
      <Route path='/detailPage/:id' element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
