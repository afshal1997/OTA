import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from "./Routes";
import './App.css';
import { connect } from "react-redux";
import Footer from './Components/Common/Footer'
import Header from './Components/Common/Header'


// import {AxiosInstance} from './Axios'

function App(props) {
  useEffect(() => {
    // AxiosInstance.get(`/data`)
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            console.log(route)
            return (route.component) ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props => {
                  return (
                    <>
                      <route.component {...props} />
                    </>
                  )
                }}
              />
            ) : null
          })}
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default connect()(App);
