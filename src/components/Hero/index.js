import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    const {img, name, description} = this.props.series[3]
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage: `url(${img})` }}> 
          <p className="hero-title">{name}</p>
          <p className="hero-description">{description}</p>    
        </div>
      </div>
      </>
    )
  }
}

export default Hero