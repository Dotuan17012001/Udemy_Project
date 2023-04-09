import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import MyComponent from "./components/MyComponent";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

const App = () => {
  return (
    <div className="app-container">
      <div>Hello World</div>
    </div>
  );
};

export default App;
