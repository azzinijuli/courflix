import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" /*style={{ backgroundImage:  `url(${img})` }}*/>
          <img className="hero-title"/>
          <p className="hero-description"></p>    
        </div>
      </div>
      </>
    )
  }
}

export default Hero