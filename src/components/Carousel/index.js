import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component{ 
  render(){
    const { type, titleMovies, title, filter, more } = this.props
    return(
      <>
      {type == "movie" ? 
      <p className="carousel-title">{titleMovies}</p> :
      <p className="carousel-title">{title}</p>
      }
      <InnerCarousel filter={filter} more={more}/>
      </>
    )
  }
}

export default Carousel