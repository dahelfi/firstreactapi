import React, { Component } from 'react'
import '../styles/pokemonTypes.scss'

export default class PokemonTypes extends Component {
    constructor(props){
        super(props);
    }



  render() {

    let backgroundStyles = {
        backgroundColor: 'rgb(240,188,128)'
    }

    {
        if(this.props.type == "grass"){
            backgroundStyles.backgroundColor = 'rgb(25,170,37)'
        }else if (this.props.type == "fire"){
            backgroundStyles.backgroundColor = 'rgb(184,9,30)'
        }
        else if (this.props.type == "flying"){
            backgroundStyles.backgroundColor = 'rgb(240,236,12)'
        }else if (this.props.type == "bug"){
            backgroundStyles.backgroundColor = 'rgb(90,204,189)'
        }else if (this.props.type == "poison"){
            backgroundStyles.backgroundColor = 'rgb(188,190,42)'
        }else if (this.props.type == "water"){
            backgroundStyles.backgroundColor = 'rgb(74,146,228)'
        }else if (this.props.type == "electric"){
            backgroundStyles.backgroundColor = 'rgb(284,108,15)'
        }else if (this.props.type == "fairy"){
            backgroundStyles.backgroundColor = 'rgb(184,9,30)'
        }else if(this.props.type == "ground"){
            backgroundStyles.backgroundColor = 'rgb(146,82,8)'
        }

    }
    return (
      <div className='typeElement' style={backgroundStyles}>
          {this.props.type}
      </div>
    )
  }
}
