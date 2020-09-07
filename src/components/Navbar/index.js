import React from 'react'
import '../Navbar/style.scss'
import logo from '../../assets/logo.png'
import BurgerMenu from '../../components/BurgerMenu';

class Navbar extends React.Component{
  render() {
    return(
      <>
        <div className="navbar-wrapper">
        <BurgerMenu />
          <img src={ logo } alt="logo" className="logo" />
          <ul className="navbar-elements">
            <li className="navbar-element">Inicio</li>
            <li className="navbar-element">Series</li>
            <li className="navbar-element">Películas</li>
            <li className="navbar-element">Agregados recientemente</li>
            <li className="navbar-element">Mi lista</li>
          </ul>
        </div>
      </>
    )
  }
} 

export default Navbar