import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import "./App.css";
import Layout from './Components/Layout'
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Profiler>
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    </Profiler>
  );
}

export default App;
