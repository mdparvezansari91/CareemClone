import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
