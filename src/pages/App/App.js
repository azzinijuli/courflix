import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import series from '../../data/series.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      movies: [],
      recommended: []  
    };
  }

componentDidMount() {
  const filteredSeries = series.filter((item) => {
    return item.type == "movie"
  })

  this.setState({
    shows: filteredSeries
  })
};  

render(){
  console.log(filteredSeries)
    return(
      <>
        <Navbar />
        <Hero />
        <Carousel title="Series" shows={this.state.shows}/>
        <Carousel title="Películas" />
        <Carousel title="Recomendadas para ti" />
      </>
    )
  }
}

export default App;
