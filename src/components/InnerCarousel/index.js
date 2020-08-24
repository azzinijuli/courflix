import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

class InnerCarousel extends React.Component{
  constructor(props){
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      variableHeight: true
    }
  }
  render(){
    const { filter } = this.props;
    return(
      <>
      <div className="inner-carousel">
      <Slider {...this.settings}>
        {filter.map((serie, key)=> {
          return (
          <Link to={`/series-and-movies/${serie.id}`}>
            <Card key={key} serie={serie} />
          </Link>
          )
        })}
      </Slider>
      </div>

      
      </>
    )
  }
}

export default InnerCarousel
