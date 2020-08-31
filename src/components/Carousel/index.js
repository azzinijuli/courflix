import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component{ 
  render(){
    const { type } = this.props
    return(
      <>
      {type == "movie" ? 
      <p className="carousel-title">{this.props.titleMovies}</p> :
      <p className="carousel-title">{this.props.title}</p>
      }
      <InnerCarousel filter={this.props.filter} more={this.props.more}/>
      </>
    )
  }
}

export default Carousel