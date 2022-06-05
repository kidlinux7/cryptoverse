import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


// App we created
import App from './App';
import store from './app/store';

// App is passed as a component to root

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    {/* Now the app with provider the whole app can communicate with each components state*/}
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



    