import React from 'react'
import '../BurgerMenu/style.scss'
import Hamburger from 'react-hamburgers';

class BurgerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }
 /*pasar esto al Navbar y después pasarlo acá como props
   una vez hecho eso, verificar el toggle de estado en navbar
   con el video del indio*/ 
  render() {
    return (
      <div className="burger-menu">
      <Hamburger
        active={this.state.active}
        type="slider"
        onClick={() => this.setState({ active: !this.state.active })}
      />
    </div>
    );
  }
}

export default BurgerMenu