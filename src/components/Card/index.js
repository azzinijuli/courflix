import React from 'react'
import '../Card/style.scss'
import { withRouter } from "react-router"

class Card extends React.Component{
  render(){
    let path = this.props.location.pathname
    const { serie, item } = this.props
    console.log(this.props.item[0])
    return(
      <>
      { path == "/home" ?
        <img 
        className="card" 
        src={serie.imgCarousel} 
        alt="serie"
        />
      :
        <img 
        className="card" 
        src={item[0].img} 
        alt="serie"
        />
      }
      </>
    )
  }
}

export default withRouter (Card)