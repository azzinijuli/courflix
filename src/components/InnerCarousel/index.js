import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'

class InnerCarousel extends React.Component{
  render(){
    console.log(this.props.filter)
    return(
      <>
      {this.props.filter.map((serie, key)=> {
        return (
        <Card key={key} serie={serie} />
        )
      })}
      </>
    )
  }
}

export default InnerCarousel
