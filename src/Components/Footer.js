import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.body}>
      <p className={classes.bg} />
      <p className={classes.txt1}>@2023 ABC-Company</p>
      <p className={classes.txt2}>
        {" "}
        <strong>Landing</strong>{" "}
      </p>
      <p className={classes.line} />
      <p className={classes.txt3}>Home</p>
      <p className={classes.txt4}>About</p>
      <p className={classes.txt5}>Contact</p>
    </div>
  );
};

export default Footer;
