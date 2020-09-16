import React from 'react'
import '../Hero/style.scss'

class Hero extends React.Component{
  /*linear-gradient(to top, black, rgba(0, 0, 0, 0)),*/
  render(){
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage: `url(${this.props.img})` }}>
          <div className="info-wrapper">
            <h1 className="hero-title">{this.props.title}</h1>
            <div className="extrainfo-wrapper">
              <span>{this.props.percent} </span>
              <span>{this.props.year} </span>
              <span>{this.props.age} </span>
              <span>{this.props.long} </span>
            </div>
            <button className="button">Reproducir</button>
            <button className="button">+ mi lista</button>
            <p className="hero-description">{this.props.desc}</p>    
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Hero