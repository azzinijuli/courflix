import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import series from '../../data/series.json'

class InnerCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      movies: [],
      recommended: []
    };
  }

  componentDidMount() {
    const filterSerie = series.filter((item) => {
      return(
        item.type == "serie"
      )
    });
    
    const filterMovie= series.filter((item) => {
      return(
        item.type == "movie"
      )
    });
    const filterRecommend = series.filter((item) => {
      return(
      item.type == "recommended"
    )
    });

    this.setState ({
      shows: filterSerie,
      movies: filterMovie,
      recommended: filterRecommend
    });
  }

  render(){
    const { shows, movies, recommended } = this.state
    return(
      <>
      {shows.map((serie, key)=> {
        return (
        <Card key={key} serie={serie}/>
        )
      })}
      </>
    )
  }
}

export default InnerCarousel
