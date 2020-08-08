import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    return(
      <>
      <p className="hero">{this.props.series[4].description}</p>
      </>
    )
  }
}

export default Hero

