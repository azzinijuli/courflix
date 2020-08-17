import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import Slider from 'react-slick'

class InnerCarousel extends React.Component{
  constructor(props){
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true
    }
  }
  render(){
    console.log(this.props.filter)
    return(
      <>
      <Slider {...this.settings}>
        {this.props.filter.map((serie, key)=> {
          return (
          <Card key={key} serie={serie} />
          )
        })}
      </Slider>
      </>
    )
  }
}

export default InnerCarousel
