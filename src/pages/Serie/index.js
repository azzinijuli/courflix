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
      id: '',
      backdrop: '',
      year: '',
      percent: '',
      age: '',
      long: '',
      name: '',
      desc: '',
      type: '',
      more: []
    }
  }

  
  componentDidMount() {
    const filtered = data.filter((serie) => {
      return serie.id == this.props.match.params.id
    })
        
    this.setState({
      id: filtered[0].id,
      backdrop: filtered[0].backdrop,
      year: filtered[0].year,
      percent: filtered[0].percentage,
      age: filtered[0].age,
      long: filtered[0].duration,
      name: filtered[0].name,
      desc: filtered[0].description,
      type: filtered[0].type,
      more: filtered[0].more
    })
  }
  
  render() {
    const { id, name, desc, backdrop, percent, age, year, long, type, more } = this.state
    return(
      <>
        <Navbar />
        <Hero 
          id={id}
          title={name}
          desc={desc}
          img={backdrop}
          percent={percent}
          age={age}
          year={year}
          long={long}
        />
        <Carousel 
          more={more}
          type={type}
          title={"Episodios"}
          titleMovies={"Más títulos similares a este"}
        />
      </>
    )
  }
}

export default serie