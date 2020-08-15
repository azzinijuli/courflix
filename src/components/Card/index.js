import React from 'react'
import '../Card/style.scss'

class Card extends React.Component{
  render(){
    return(
      <img src={this.props.serie.imgCarousel} alt="card" />
    )
  }
}

export default Card