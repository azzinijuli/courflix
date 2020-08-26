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

  componentDidMount() {
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
    console.log(series.episodes)
    return(
      <>
        <Navbar />
        <Hero 
          title={series[0].name}
          desc={series[0].description}
          img={series[0].backdrop}
          percent={series[0].percentage}
          age={series[0].age}
          year={series[0].year}
          long={series[0].duration}
        />
        <Carousel title="Series" filter={this.state.shows} />
        <Carousel title="Películas" filter={this.state.movies}/>
        <Carousel title="Recomendadas para ti" filter={this.state.recommended} />
      </>
    )
  }
}

export default App;
