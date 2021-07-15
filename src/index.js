import React from 'react';
import ReactDOM from 'react-dom';
import './theme.scss'
import App from './App';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import { nameReducer, wishReducer } from './Store/Reducer';
import thunk from 'redux-thunk';
import '@fortawesome/fontawesome-free/css/all.min.css';


const masterReducer=combineReducers({
  name:nameReducer,
  wish:wishReducer
})
const store=createStore(
  masterReducer,
  {name:"main state val",wish:["val 1 ","val 2"]},
  applyMiddleware(thunk)
  
  )
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
