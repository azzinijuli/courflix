import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"

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
    const { filter, more } = this.props;
    let path = this.props.location.pathname
    return(
      <>
        <div className="inner-carousel">
        <div className = "prueba"> 
        { path == "/home" ?   
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
        :
        <Slider {...this.settings}> 
          {more.map((item, key)=>{
            return(
              <Card 
              key={key} 
              item={item} 
              />
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
