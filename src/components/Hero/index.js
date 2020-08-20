import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  render(){
    console.log(this.props.title)
    console.log(this.props.desc)
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${this.props.img})` }}>
          <div className="info-wrapper">
            <p className="hero-title">{this.props.title}</p>
            <p className="hero-description">{this.props.desc}</p>    
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Hero