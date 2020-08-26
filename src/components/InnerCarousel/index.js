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
    this.state = {
      episodes: ['']
    }
    console.log(2, this.props.match)
  }

  componentDidMount() {
    let newArr = series.map((result)=> {
      return result.episodes
    })

    this.setState({
      episodes: newArr
    })
  }
  
  render(){
    const { filter } = this.props;
    const { episodes } = this.state
    console.log(1, episodes)
    
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
