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

  handleClick() {
    const { active } = this.state
    const { handleCallback } = this.props
    this.setState ({ 
      active: !active 
    })
    handleCallback(active)
  }
  
  render() {
    const { active } = this.state
    return (
      <div className="burger-menu">
      <Hamburger
        active={active}
        type="slider"
        onClick={() => this.handleClick()}
      />
    </div>
    );
  }
}

export default BurgerMenu