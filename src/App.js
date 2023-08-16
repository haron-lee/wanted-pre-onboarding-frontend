import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import ToDo from './pages/ToDo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </>
  );
}
export default App;
