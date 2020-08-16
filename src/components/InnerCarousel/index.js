import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'

class InnerCarousel extends React.Component{
  render(){
    const { shows } = this.props
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
