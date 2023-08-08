import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import './components/style.css'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Hola, acá irán los productos'}/>
    </>
  );
}

export default App;
