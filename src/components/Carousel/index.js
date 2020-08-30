import React from 'react'
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'
import series from '../../data/series.json'

class Carousel extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    }
  }

  componentDidMount() {
    const arrEpisodes = series.map((result) => {
      return result.episodes
    });
    
    this.setState({
      episodes: arrEpisodes
    });
  }

  render(){
    return(
      <>
      <p className="carousel">{this.props.title}</p>
      <InnerCarousel filter={this.props.filter} episodes={this.state.episodes} />
      </>
    )
  }
}

export default Carousel