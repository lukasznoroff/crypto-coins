import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (

    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins/:id' element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
