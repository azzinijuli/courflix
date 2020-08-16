import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component{
    
  render(){
    return(
      <>
      <p className="carousel">{this.props.title}</p>
      <InnerCarousel />
      </>
    )
  }
}

export default Carousel