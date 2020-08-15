import React from 'react'
import '../InnerCarousel/style.scss'
import Card from '../Card'
import series from '../../data/series.json'

class InnerCarousel extends React.Component{
  render(){
    const filterSerie = series.filter((item) => {
      return(
        item.type == "serie"
        )
      })
      const filterMovie= series.filter((item) => {
        return(
          item.type == "movie"
          )
        })
        const filterRecommend = series.filter((item) => {
      return(
        item.type == "recommended"
        )
      })
      return(
        <>
        {filterRecommend.map((serie, key)=> {
          return (
            <Card key={key} serie={serie}/>
          )
        })}
      </>
    )
  }
}

export default InnerCarousel