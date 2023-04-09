import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
    </div>
  );
};

export default App;
