import React from "react";
import classes from "./ThirdDisplay.module.css";
import ForthDisplay from "./ForthDisplay";

const ThirdDisplay = () => {
  return (
    <div className={classes.thirdDisplay}>
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
     <ForthDisplay/>
    </div>
  );
};

export default ThirdDisplay;
