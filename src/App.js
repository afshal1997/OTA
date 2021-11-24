import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import { connect } from "react-redux";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
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
