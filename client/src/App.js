import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  // const HocLandingPage = Auth(LandingPage, null);
  // const HocSignInPage = Auth(LoginPage, false);
  // const HocSignUpPage = Auth(RegisterPage, false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//null => 아무나 출입이 가능한 페이지
//true => 로그인한 유저만 출입이 가능한 페이지
//false => 로그인한 유저는 출입 불가능한 페이지
