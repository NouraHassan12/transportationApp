import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateCompanyContainer from "./containers/CreateCompanyContainer";
import EditCompanyContainer from "./containers/EditCompanyContainer";
import DetailCompanyContainer from "./containers/DetailCompanyContainer";
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter >
          <Route path="/" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateCompanyContainer} />

          <Route path="/detail/:id" exact component={DetailCompanyContainer} />

          <Route path="/edit/:id" exact component={EditCompanyContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
