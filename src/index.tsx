import React, {createContext} from "react";
import ReactDOM from 'react-dom'
import App from './App';
import itemsStore from "./store/items";
import {BrowserRouter as Router} from "react-router-dom";
import './reset.css'

const store = itemsStore.create({});


export const StoreContext = createContext(store);

ReactDOM.render(
    <React.StrictMode>

        <StoreContext.Provider value={store}>
            <Router>
                <App/>
            </Router>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

