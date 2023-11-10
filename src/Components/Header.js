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
        <p className={classes.home}>Home</p>
        <p className={classes.about}>About</p>
        <p className={classes.contact}>Contact</p>
        <p className={classes.landing}>Landing</p>
        <button className={classes.button}>Buy Now</button>
      </div>
      <p className={classes.groupImg} />
      <div>
        {" "}
        <button className={classes.menubtn} onClick={toggleDrawer}>
          ☰ MENU
        </button>
        {isDrawerOpen && (
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button>Buy Now</button>
            </li>
          </ul>
        )}
      </div>
      <div className={classes.txt}>
        <p className={classes.intro}>
          Introduce Your Product Quickly & Effectively
        </p>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
          <br />
          <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
        <button className={classes.button1}>Purchase UI kit</button>
        <button className={classes.button2}>Learn More</button>
      </div>
      <LayoutDisplay />
    </div>
  );
};

export default Header;
