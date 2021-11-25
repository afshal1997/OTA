import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ApplyNowModal from "./Components/Common/Modal/ApplyNowModal";
import WelcomePopup from "./Components/Common/WelcomePopup";
import { CHANGE_MODAL } from "./Store/Action";
function App() {
  const { modalReducer } = useSelector((state) => state);
  const [welcomePopup, setPopup] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    if (!localStorage.getItem("welcome-popup")) {
      setPopup(true);
      setTimeout(() => {
        localStorage.setItem("welcome-popup", true);
        setPopup(false);
        dispatch(CHANGE_MODAL(true));
      }, 8000);
    }
  }, []);
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <WelcomePopup show={welcomePopup} handleClose={() => setPopup(false)} />
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
