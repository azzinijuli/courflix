import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component{  
  render(){
    return(
      <>
      <p className="carousel">{this.props.title}</p>
      <InnerCarousel shows={this.props.shows}/>
      </>
    )
  }
}

export default Carousel