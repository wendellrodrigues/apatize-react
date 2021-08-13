import React, { Fragment, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideMenu from "./components/layout/SideMenu";
import HamburgerButton from "./components/buttons/HamburgerButton";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  //For side menu
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Fragment>
        <HamburgerButton open={open} setOpen={(open) => setOpen(open)} />
        <Navbar />
        <SideMenu open={open} setOpen={(open) => setOpen(open)} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
