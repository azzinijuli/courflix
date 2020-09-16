import React from 'react'
import '../Card/style.scss'
import { withRouter } from "react-router"

class Card extends React.Component{
  render(){
    const path = this.props.location.pathname
    const { serie, item } = this.props
    return(
      <>
      { path == "/" ?
        <img 
        className="card" 
        src={serie.imgCarousel} 
        alt="serie"
        />
      :
        <img 
        className="card" 
        src={item.img} 
        alt="serie"
        />
      }
      </>
    )
  }
}

export default withRouter (Card)