import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Rating from './Components/Rating';
import Advantage from './Components/Advantage';
import Parents from './Components/Parents';
import Select from './Components/Select';
import Choose from './Components/Choose';
import Learning from './Components/Learning';
import Question from './Components/Questions';
import Footer from './Components/Footer';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import PortFolio from './Pages/PortFolio';
import Register from './Pages/Register';
import Goals from './Pages/Goals';
import FreeClass from './Pages/FreeClass';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* NavBar is included here to display it on all pages */}
        <NavBar />
        <Routes>
          {/* Root Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Rating />
                <Advantage />
                <Parents />
                <Select />
                <Choose />
                <Learning />
                <Question />
              </>
            }
          />
          {/* Individual Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} /> {/* Corrected here */}
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/Free" element={<FreeClass/>}/>
          {/* Fallback Route for unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
