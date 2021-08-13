import React, { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import SideMenu from "./components/layout/SideMenu";
import HamburgerButton from "./components/buttons/HamburgerButton";

const App = () => {
  //For side menu
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <HamburgerButton open={open} setOpen={(open) => setOpen(open)} />
      <Navbar />
      <SideMenu open={open} setOpen={(open) => setOpen(open)} />
    </Fragment>
  );
};

export default App;
