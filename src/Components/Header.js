import React, { useState } from "react";
import classes from "./Header.module.css";

import LayoutDisplay from "./FirstDisplay";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div>
          {" "}
          <p className={classes["header-home"]}>Home</p>
          <p className={classes["header-about"]}>About</p>
          <p className={classes["header-contact"]}>Contact</p>
          <p className={classes["header-landing"]}>Landing</p>
          <button className={classes["header-button"]}>Buy Now</button>
          <p className={classes["header-container"]}></p>
          <p className={classes.intro}>
            Introduce Your Product Quickly & Effectively
          </p>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br />
            <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium
            quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className={classes.button}>
            <button className={classes.button1}> Purchase UI kit</button>
            <button className={classes.button2}>Learn More</button>
          </div>
          <div className={classes.menu} onClick={toggleDrawer}>  <strong>☰ MENU</strong></div>
          {isDrawerOpen && (
        <div className={classes.drawer}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
        </div>
      </div>
      <LayoutDisplay />
    </div>
  );
};

export default Header;
