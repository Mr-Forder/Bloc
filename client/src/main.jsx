import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
//import transaction provider context
import { TransactionProvider } from "./context/TransactionContext";

//redux
import store from "./app/store";

ReactDOM.render(
  //Entire app now wrapped in transaction provider context provider
  <TransactionProvider>
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById("root")
);
