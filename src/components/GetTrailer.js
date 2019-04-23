import React from 'react'

import axios from 'axios'


class GetTrailer extends React.Component {
  constructor(){
    super()

    this.state = {
      film: null //WHY NULL?
    }
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=f09ea565`)
      .then(res => (this.setState({film: res.data})))
  }

  render(){
    if(!this.state.film) return null
    return (
      <div>
        <div>{this.state.film.Title}</div>
        <div>{this.state.film.Plot}</div>
        <div>{this.state.film.Director}</div>
      </div>
    )
  }

}

export default GetTrailer
