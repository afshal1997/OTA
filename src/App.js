import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import { connect, useSelector } from "react-redux";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ApplyNowModal from "./Components/Common/Modal/ApplyNowModal";
import { addAltAttribute } from "./Constants/functions";
function App() {
  const { modalReducer } = useSelector((state) => state);
  useEffect(() => {
    AOS.init();
    addAltAttribute()
  }, []);
  return (
    <>

      <Suspense fallback={<div className="d-flex justify-content-center align-items-center">Loading...</div>}>
        <Router>
          <Header />
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
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default connect()(App);
