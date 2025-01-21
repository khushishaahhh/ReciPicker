import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./HomePage.jsx";
import LoginSignupCard from "./LoginSignupCard.jsx";
import Main from "./MainPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
