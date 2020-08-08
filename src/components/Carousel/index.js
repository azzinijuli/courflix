import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component{
  render(){
    return(
      <>
      <p className="carousel">Soy un Carousel</p>
      <InnerCarousel />
      </>
    )
  }
}

export default Carousel