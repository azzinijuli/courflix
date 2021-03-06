import React from 'react'
import { withRouter } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import '../Hero/style.scss'

class Hero extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLiked: false,
      isDisliked: false
    }
  }

  handleClick = activeButton => {
    const { isLiked, isDisliked } = this.state
    if(activeButton == "like") {
      this.setState({
        isLiked: !isLiked,
        isDisliked: false
      })
    } else {
      this.setState({
        isLiked: false,
        isDisliked: !isDisliked
    })
    }
  }

  render(){
    const path = this.props.location.pathname
    const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
    const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />
    const { isLiked, isDisliked } = this.state
    const { percent, year, age, long, id, desc } = this.props
    return(
      <>
      <div className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage: `linear-gradient(to top right, black, rgba(0, 0, 0, 0)), url(${this.props.img})` }}>
          <div className="info-wrapper">
            <h1 className="hero-title">{this.props.title}</h1>
            <div className="extrainfo-wrapper">
              <span>{percent}</span>
              <span>{year}</span>
              <span>{age}</span>
              <span>{long}</span>
            </div>
            <div className="button-container">
                <button className="button">Reproducir</button>
                <button className="button">+ mi lista</button>
              {path == `/series-and-movies/${id}` &&
                <div className="thumbs-container">
                  <span 
                  className={`thumb ${isLiked && "like"}`}
                  onClick={() => this.handleClick("like")}>
                  {thumbsUp}
                  </span>
                  <span 
                  className={`thumb ${isDisliked && "dislike"}`}
                  onClick={() => this.handleClick("dislike")}>
                  {thumbsDown}
                  </span>
                </div>
              }
            </div>
            <p className="hero-description">{desc}</p>    
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default withRouter (Hero)