import React from 'react'
import '../Navbar/style.scss'
import logo from '../../assets/logo.png'
import BurgerMenu from '../../components/BurgerMenu'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component{
  constructor(props) {
    super(props) 
    this.state = {
      isOpen: false
    }
  }

  handleCallback(isOpen) {
    this.setState({
      isOpen: !isOpen
    })
  }

  handleClick = id => {
    const scrollType = {
      duration: 500,
      delay: 50,
      smooth: true,
      offset: -10,
   }
    scroller.scrollTo(id, scrollType);
  }

  
  render() {
    const { isOpen } = this.state
    const path = this.props.location.pathname
    return(
      <>
        <div className="navbar-wrapper">
        <BurgerMenu 
          handleCallback={(isOpen)=>this.handleCallback(isOpen)}
        />
        <img src={logo} alt="logo" className="logo" />
        {path == "/" ?
          <ul className={`navbar-elements ${isOpen ? 'show' : ''}`}>
            <li className="navbar-element" onClick={()=> this.handleClick("home")}>Inicio</li>
            <li className="navbar-element" onClick={()=> this.handleClick("series")}>Series</li>
            <li className="navbar-element" onClick={()=> this.handleClick("movies")}>Películas</li>
            <li className="navbar-element" onClick={()=> this.handleClick("recommended")}>Recomendadas</li>
            <li className="navbar-element">Mi lista</li>
          </ul>
        :
        <Link to="/">
          <ul className={`navbar-elements ${isOpen ? 'show' : ''}`}>
            <li className="navbar-element">Inicio</li>
            <li className="navbar-element" onClick={()=> this.handleClick("series")}>Series</li>
            <li className="navbar-element" onClick={()=> this.handleClick("movies")}>Películas</li>
            <li className="navbar-element" onClick={()=> this.handleClick("recommended")}>Recomendadas</li>
            <li className="navbar-element">Mi lista</li>
          </ul>
        </Link>
        }
        </div>
      </>
    )
  }
} 

export default withRouter (Navbar)