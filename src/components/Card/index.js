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
      <div className="card-container">
        <img 
        className="card" 
        src={serie.imgCarousel} 
        alt="serie"
        />
      </div>
      :
      <div className="card-container">
        <img 
        className="card" 
        src={item.img} 
        alt="serie"
        />
        <p className="chapter-summary">{item.summary}</p>
      </div>
      }
      </>
    )
  }
}

export default withRouter (Card)