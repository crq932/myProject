import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Mypage from "./pages/mypage";
import Signup from "./pages/signup";
import Main from "./pages/main";
import Thank from "./pages/thank";
import Congratulation from "./pages/congratulation";
import Request from "./pages/request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BigScreen from "./pages/bigScreen";
import GlobalStyle from "./globalStyle";
import axios from "axios";
import Write from "./pages/write";

export interface Iprops {
  isLogin: boolean;
  handleLogout: () => void;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    componentSocialDidMount();
  }, []);
  const getSocialAccessToken = async (
    authorizationCode: unknown,
    social: string
  ) => {
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}${social}`,
        { authorizationCode },
        { withCredentials: true }
      )
      .then((res) => {
        setAccessToken(res.data.data.access_token);
        setIsSocialLogin(true);
        // window.location.assign("http://localhost:3000/");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const componentSocialDidMount = () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      getSocialAccessToken(authorizationCode, url.pathname);
    }
  };

  const setLogin = (login: boolean, tok: string) => {
    setIsLogin(login);
    setAccessToken(tok);
  };

  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/logout`,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        setIsLogin(false);
        setIsSocialLogin(false);
      });
  };

  return isSocialLogin ? (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header isLogin={isSocialLogin} handleLogout={handleLogout} />
        <Landing />
        <Footer />
      </BrowserRouter>
    </div>
  ) : (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header isLogin={isLogin} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route
            path="/mypage"
            element={
              <Mypage
                isLogin={isLogin}
                handleLogout={handleLogout}
                accessToken={accessToken}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/thank" element={<Thank />} />
          <Route path="/congratulaion" element={<Congratulation />} />
          <Route path="/request" element={<Request />} />
          <Route path="/bigScreen" element={<BigScreen />} />
          <Route path="/write" element={<Write />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
