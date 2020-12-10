import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase  from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDcEhhH6NRUi8W5MjIp49gn8bIaZ8kA6g",
  authDomain: "e-cart-8e76a.firebaseapp.com",
  projectId: "e-cart-8e76a",
  storageBucket: "e-cart-8e76a.appspot.com",
  messagingSenderId: "300621379313",
  appId: "1:300621379313:web:8cb444094910772eb65b50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
