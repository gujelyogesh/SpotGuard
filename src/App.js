import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Residential from './component/Residential';
import Commercial from './component/Commercial';
import OurService from './component/OurService';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/ourservice" element={<OurService />} />

      </Routes>
    </>
  );
}

export default App;
