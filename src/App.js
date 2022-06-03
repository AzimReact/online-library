import { Route, Routes } from 'react-router-dom';
import Crud from './pages/Crud/Crud';
import Header from './components/Header/Header';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/crud' element={<Crud />}>
          <Route path=':id' element={<Crud />} />
        </Route>
        <Route path='/favorites' element = { <Favorites/> } />
        <Route path='*' element = {<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
