import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";
import ApplyNowModal from "./Components/Common/Modal/ApplyNowModal";
function App() {
  const { modalReducer } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <ApplyNowModal show={modalReducer.isModalOpen} />
        <Switch>
          {routes.map((route, index) => {
            return route.component ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <>
                      <route.component {...props} />
                    </>
                  );
                }}
              />
            ) : null;
          })}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default connect()(App);
