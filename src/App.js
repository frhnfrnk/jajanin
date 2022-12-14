import logo from './logo.svg';
import './App.css';
import LandingPage from './page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './page/Cart';
import DefaultLayout from './layout/DefaultLayout';
import LoginPage from './page/LoginPage';
import { SwitchThemeProvider } from './context/SwitchTheme';


function App() {
  return (
    <BrowserRouter>
      <SwitchThemeProvider>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route exact path="/" name="Landing Page" element={<LandingPage />} />
          <Route exact path="/login" name="Login Page" element={<LoginPage />} />
        </Routes>
      </SwitchThemeProvider>
    </BrowserRouter>
  );
}

export default App;
