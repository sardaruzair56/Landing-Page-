import React from "react";
import classes from "./ForthDisplay.module.css";
import FifthDisplay from "./FifthDisplay";
import Button from './UI/button';

const ForthDisplay = () => {
  return (
    <div className={classes.ForthDisplay}>
      <p className={classes.image} />
      <p className={classes.title}>Light, Fast & Powerful</p>
      <p className={classes.Text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
      <Button/>
      <FifthDisplay/>
    </div>
  );
};

export default ForthDisplay;
