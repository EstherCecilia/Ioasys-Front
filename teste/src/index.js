import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import Form from "./Form";

import Login from "./Login";

import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import store from "./store";


import axios from 'axios';

const Submit = values => {
axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
	console.log(persons);
      })

console.log(values);
}

const rootEl = document.getElementById("root");
ReactDOM.render(
  
	<Provider store={store}>
          
{/* <Form
        onSubmit={values => {
          console.log(values);
        }}  /> */}
 
     {/*<App />
      */}

 <Login
        onSubmit={Submit}
      />      
</Provider>,
  rootEl
);



// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
