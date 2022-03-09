import ReactDOM from "react-dom";
import "./theme.scss";
import App from "./App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { modalReducer } from "./Store/Reducer";
import thunk from "redux-thunk";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const masterReducer = combineReducers({
  modalReducer: modalReducer,
});
const store = createStore(masterReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);
