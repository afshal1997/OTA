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
    const now = new Date();
    let time = now.getTime();
    const hourImMs = 60 * 60 * 1000
    AOS.init();
    const checkTimer = +localStorage.getItem('welcome-popup') + hourImMs
    const estimatedTimeToShowPopup = now > checkTimer
    if (!localStorage.getItem("welcome-popup") || estimatedTimeToShowPopup) {
      setPopup(true);
      setTimeout(() => {
        localStorage.setItem("welcome-popup", time);
        setPopup(false);
        dispatch(CHANGE_MODAL(true));
      }, 15000);
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
