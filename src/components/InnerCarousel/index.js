import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import series from '../../data/series.json'

class InnerCarousel extends React.Component{
  constructor(props){
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      variableHeight: true
    };

  }
  render(){
    const { filter } = this.props;
    if (filter[0].episodes) {
      console.log(filter[0].episodes)
    } else {
      console.log('no hay episodios')
    }
    return(
      <>
        <div className="inner-carousel">
        <Slider {...this.settings}>
          {filter.map((serie, key)=> {
            return (
            <Link to={`/series-and-movies/${serie.id}`}>
              <Card 
                key={key} 
                serie={serie} 
              />
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
