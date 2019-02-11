// import React, { useContext, useReducer, useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import Main from "./Main";
// import Input from "./Input";
// import * as serviceWorker from "./serviceWorker";

// import Context from "./context";
// import Reducer from "./reducer";

// const App = () => {
//   const initialState = useContext(Context);
//   const [state, dispatch] = useReducer(Reducer, initialState);

//   return (
//     <Context.Provider value={{ state, dispatch }}>
//       <Main />
//     </Context.Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Main from "./Main";
import TodosContext from "./context";
import TodosReducer from "./reducer";

// import TodoList from "./Components/TodoList";
// import AddTodo from "./AddTodo";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Main />
    </TodosContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
