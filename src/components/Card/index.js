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
        <div>
          {item.summary ?
            <>
            <span className="chapter-title">{item.title}</span>
            <p className="chapter-summary">{item.summary}</p>
            </>
          :
            <>
            <span className="chapter-title">{item.name}</span>
            <p className="chapter-summary">{item.description}</p>
            </>
          }
        </div>
      </div>
      }
      </>
    )
  }
}

export default withRouter (Card)