import { Outlet, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Landing />} />
        <Route path='/signup' element={<Landing />} />
      </Routes>
    </>
  );
}
export default App;
