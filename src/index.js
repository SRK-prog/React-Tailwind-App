import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Navigation from "./navigator";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/style.css";
import store from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
