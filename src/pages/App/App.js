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
      series: series
    };
  }
  render(){
    const { series } = this.state
    return(
      <>
        <Navbar />
        <Hero series={series}/>
        <Carousel />
      </>
    )
  }
}

export default App;
