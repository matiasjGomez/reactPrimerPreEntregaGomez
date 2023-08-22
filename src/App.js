import './components/style.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './routes/Home';
import ItemDetail from './components/ItemDetail';
import Contact from './routes/Contact'
import CartItemsContainer from './routes/CartItemsContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/item/:id' element={<ItemDetail />} />
        <Route exact path= '/category/:categoryName' element={<ItemListContainer />} />
        <Route exact path= '/contact' element={<Contact />} />
        <Route exact path= '/cart' element={<CartItemsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
