import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    return(
      <>
      <div className="hero-wrapper">
      <img className="hero-background" style={{backgroundImage: this.props.series[0].img}}/>
      <p></p>
      <p className="hero">{this.props.series[0].description}</p>
      </div>
      </>
    )
  }
}

export default Hero

