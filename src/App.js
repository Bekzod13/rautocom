import { Route, Routes } from "react-router-dom";

// import component
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// import pages
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
