import './css/App.css';
import { NavBar } from './componet/NavBar';


import { Routes, Route } from 'react-router-dom';

//import Pages
import { Home } from './pages/home';
import { About } from './pages/about';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
