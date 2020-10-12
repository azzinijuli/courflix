import React from 'react'
import '../BurgerMenu/style.scss'
import Hamburger from 'react-hamburgers';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      active: false
    };
  }
 /*pasar esto al Navbar y después pasarlo acá como props
   una vez hecho eso, verificar el toggle de estado en navbar
   {() => this.setState({ active: !this.props.active })}
   */ 
  handleClick() {
    this.setState ({ 
      active: !this.state.active 
    })
    this.props.handleCallback(this.state.active)
  }
  
  render() {
    return (
      <div className="burger-menu">
      <Hamburger
        active={this.state.active}
        type="slider"
        onClick={() => this.handleClick()}
      />
    </div>
    );
  }
}

export default BurgerMenu