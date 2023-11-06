import React from "react";
import classes from "./FifthDisplay.module.css";
import Footer from "./Footer";

const FifthDisplay = () => {
  return (
    <div className={classes.bgIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="935"
        viewBox="0 0 1440 935"
        fill="none"
        className={classes.bgimg}
      >
        <path
          opacity="0.5"
          d="M-139.904 9.26594C640.819 120.739 1608.53 9.26594 1608.53 9.26594C1608.53 9.26594 2244.76 1074.31 1608.53 918.513C972.293 762.719 343.343 964.177 -139.904 918.513C-623.152 872.85 -920.628 -102.208 -139.904 9.26594Z"
          fill="#E7ECFF"
        />
      </svg>
      <p className={classes.title}>A Price To Suit Everyone</p>
      <p className={classes.text}> 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{" "}
      </p>
      <p className={classes.design}>$40</p>
      <p className={classes.design2}>UI Design Kit</p>
      <p className={classes.design3}>See, One price. Simple.</p>
      <button className={classes.button}>Purchase Now</button>
      <Footer/>
    </div>
  );
};

export default FifthDisplay;
