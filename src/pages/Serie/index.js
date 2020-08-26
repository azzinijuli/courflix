import React from 'react'
import '../Serie/style.scss'
import data from '../../data/series.json'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'

class serie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      backdrop: '',
      year: '',
      percent: '',
      age: '',
      long: '',
      name: '',
      desc: ''
    }
  }

  componentDidMount() {
    const filtered = data.filter((serie) => {
      return serie.id == this.props.match.params.id
    })
    console.log(this.props.match.params.id)
    
    this.setState({
      backdrop: filtered[0].backdrop,
      year: filtered[0].year,
      percent: filtered[0].percentage,
      age: filtered[0].age,
      long: filtered[0].duration,
      name: filtered[0].name,
      desc: filtered[0].description
    })
  }
  render() {
    return(
      <>
        <Navbar />
        <Hero 
          title= {this.state.name}
          desc={this.state.desc}
          img={this.state.backdrop}
          percent={this.state.percent}
          age={this.state.age}
          year={this.state.year}
          long={this.state.duration}
        />
        <Carousel />
      </>
    )
  }
}

export default serie