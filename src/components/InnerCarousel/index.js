import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"

class InnerCarousel extends React.Component{
  constructor(props){
    super(props);
    this.props.location.pathname == "/" ?  
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      variableHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    :
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      variableHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: "unslick"
        }
      ]
    }
  }

  render(){
    const { filter, more } = this.props;
    const path = this.props.location.pathname
    return(
      <>
        <div className="inner-carousel">
        <div className = "prueba"> 
        { path == "/" ?   
        <Slider {...this.settings}>
          {filter.map((serie, key)=> {
            return (
            <Link to={`/series-and-movies/${serie.id}`} key={key} >
              <Card serie={serie} />
            </Link>
            )
          })}
        </Slider>
        :
        <Slider {...this.settings}> 
          {more.map((item, key)=>{
            return(
              <Card key={key} item={item} />
            )
          })}
        </Slider>
        }
        </div> 
        </div>
      </>
    )
  }
}

export default withRouter (InnerCarousel)
