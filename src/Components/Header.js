import React from 'react'
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
        
      <p className={classes['header-home'] }>Home</p>
      <p className={classes['header-about']}>About</p>
      <p className={classes['header-contact']}>Contact</p>
      <p className={classes['header-landing']}><strong>Landing</strong></p>
      <button className={classes['header-button']}>Buy Now</button>
       
      
    </div>
  )
}

export default Header
