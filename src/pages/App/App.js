import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import series from '../../data/series.json'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shows: [],
      movies: [],
      recommended: []
    }
  }
  componentWillMount() {
    const filteredSeries = series.filter((serie)=>{
      return serie.type == "serie"
    })
    const filteredMovies = series.filter((serie)=>{
      return serie.type == "movie"
    })
    const filteredRecommended = series.filter((serie)=>{
      return serie.type == "recommended"
    })

    this.setState ({
      shows: filteredSeries,
      movies: filteredMovies,
      recommended: filteredRecommended
    })
  }
  
  render(){
    return(
      <>
        <Navbar />
        <Hero />
        <Carousel title="Series" filter={this.state.shows} />
        <Carousel title="Películas" filter={this.state.movies}/>
        <Carousel title="Recomendadas para ti" filter={this.state.recommended} />
      </>
    )
  }
}

export default App;
