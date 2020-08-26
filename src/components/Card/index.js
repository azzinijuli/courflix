import React from 'react'
import '../Card/style.scss'

class Card extends React.Component{
  render(){
    const { serie } = this.props
    return(
      <img 
      className="card" 
      src={serie.imgCarousel} 
      alt="serie"/>
    )
  }
}

export default Card