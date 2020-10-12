import React from 'react';
import './style.scss';
import '../../components/BurgerMenu'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import series from '../../data/series.json'
import { Element } from 'react-scroll'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shows: [''],
      movies: [''],
      recommended: ['']
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
    const { shows, movies, recommended } = this.state
    return(
      <>
        <Navbar />
        <Element id={"home"}>
          <Hero 
            title={series[0].name}
            desc={series[0].description}
            img={series[0].backdrop}
            percent={series[0].percentage}
            age={series[0].age}
            year={series[0].year}
            long={series[0].duration}
          />
        </Element>
        <Element id="series">
          <Carousel title="Series" filter={shows} />
        </Element>
        <Element id="movies">
          <Carousel title="Películas" filter={movies}/>
        </Element>
        <Element id="recommended">
          <Carousel title="Recomendadas para ti" filter={recommended} />
        </Element>
      </>
    )
  }
}

export default App;
