import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,
         Route,
         Routes} 
        from "react-router-dom";
import User from "./components/Header/User/User";
import Admin from "./components/Header/Admin/Admin";
import HomePage from "./components/Header/Home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <Router>
      <Routes>
      <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path="users" element={<User/>}/>
          <Route path="admins" element={<Admin/>}/>
      </Route>
      </Routes>
    </Router>

    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
