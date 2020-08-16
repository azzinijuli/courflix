import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'

class App extends React.Component {

  render(){

    return(
      <>
        <Navbar />
        <Hero />
        <Carousel title="Series" />
        <Carousel title="Películas" />
        <Carousel title="Recomendadas para ti" />
      </>
    )
  }
}

export default App;
