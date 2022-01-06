import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Layout from './Components/Layout'
import ScrollToTop from "./Components/Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ApplyNowModal from "./Components/Common/Modal/ApplyNowModal";
import { addAltAttribute } from "./Constants/functions";
import WebSchema from "./Components/Common/Schema/Schema";
import { CHANGE_MODAL } from "./Store/Action";
const App = () => {
  const { modalReducer } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    const now = new Date();
    let time = now.getTime();
    const hourImMs = 60 * 60 * 1000
    AOS.init();
    const checkTimer = +localStorage.getItem('contact-ota') + hourImMs
    const estimatedTimeToShowPopup = now > checkTimer
    if (!localStorage.getItem("contact-ota") || estimatedTimeToShowPopup) {
      setTimeout(() => {
        localStorage.setItem("contact-ota", time);
        dispatch(CHANGE_MODAL(true));
      }, 2000);
    }
    addAltAttribute()
  }, []);
  return (
    <>

      <Router>
        <Layout>
          <WebSchema />
          <Suspense fallback={<div className="d-flex justify-content-center align-items-center">Loading...</div>}>
            <ScrollToTop />
            <ApplyNowModal show={modalReducer.isModalOpen} />
            <Switch>
              {React.Children.toArray(
                routes.map((route) => {
                  return route.component ? (
                    <Route
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
                })
              )}
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default connect()(App);
