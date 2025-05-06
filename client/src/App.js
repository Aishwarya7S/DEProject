import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Landing from './Pages/Landing';
import AuthForm from './Components/AuthForm';
import MyNavbar from './Components/MyNavbar';
import Home from './Pages/Home';
import Empower from './Pages/Empower';
import LegalRights from './Pages/LegalRights';
import Resources from './Pages/Resources';
import Profile from './Pages/Profile';
import Games from './Pages/Games';
import Quiz from './Pages/Quiz';
import Counsellor from './Pages/Counsellor';
import Admin from './Pages/Admin';
import Mentalhb from './Pages/Mentalhb';
import Canvas from './Pages/Canvas';
import Patternpuzzle from './Pages/Patternpuzzle';
import Rights from './Pages/Rights';
import Puzzle from './Pages/Puzzle';
import Hazard from './Pages/Hazard';

function Layout({ isAuthenticated }) {
  return (
    <>
      {isAuthenticated && <MyNavbar />}
      <div style={{ marginTop: isAuthenticated ? '70px' : '10px' }}>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/signin" element={<AuthForm mode="signin" onSignIn={handleSignIn} />} />
      <Route path="/signup" element={<AuthForm mode="signup" onSignIn={handleSignIn} />} />

      <Route element={<Layout isAuthenticated={isAuthenticated} />}>
        <Route path="/mynavbar" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/empower" element={<Empower />} />
        <Route path="/legalrights" element={<LegalRights />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/games" element={<Games />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/patternpuzzle" element={<Patternpuzzle />} />
        <Route path="/mentalhb" element={<Mentalhb />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/hazard" element={<Hazard />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/admin" element={<Admin />} />
        </Route>
    </Routes>
  );
}
export default App;