import React from 'react'
import classes from './SecondDisplay.module.css';
import ThirdDisplay from './ThirdDisplay';
const SecondDisplay = () => {
  return (
    <div>
      <p className={classes.img}/>.
      <div className={classes.TitleText}>
      <p className={classes.Title}>
        Light, Fast & PowerFul
      </p>
      <p className={classes.Text}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      

      </div>
      <ThirdDisplay/>
    </div>
    
  )
  
}

export default SecondDisplay
