import React from 'react'
import '../Card/style.scss'

class Card extends React.Component{
  render(){
    return(
      <img className="card" src={this.props.serie.imgCarousel}/>
    )
  }
}

export default Card