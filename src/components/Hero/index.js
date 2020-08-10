import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    const {img, logo, description} = this.props.series[3]
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage:  `url(${img})` }}>
          <img className="hero-title" src={logo}/>
          <p className="hero-description">{description}</p>    
        </div>
      </div>
      </>
    )
  }
}

export default Hero