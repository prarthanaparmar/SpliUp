import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {!isLoggedIn && (
        <div>
          <h1>SignUp</h1>
          <SignUp />
          <h1>Login</h1>
          <Login login={loginHandler} />
        </div>
      )}
      {isLoggedIn && <Main />}
    </div>
  );
}

export default App;
