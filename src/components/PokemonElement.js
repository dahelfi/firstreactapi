import React, { Component } from 'react'
import '../styles/pokemonElement.scss'
import PokemonTypes from './PokemonTypes';

export default class pokemonElement extends Component {
    constructor(props){
        super(props);
    }



  render() {
    let backgroundStyles = {
        backgroundColor: 'rgb(240,188,128)'
    }


    {
        
        if(this.props.element['types'][0]['type']['name'] == "grass"){
            backgroundStyles.backgroundColor = 'rgb(25,170,37)'
        }else if (this.props.element['types'][0]['type']['name'] == "fire"){
            backgroundStyles.backgroundColor = 'rgb(184,9,30)'
        }
        else if (this.props.element['types'][0]['type']['name'] == "flying"){
            backgroundStyles.backgroundColor = 'rgb(240,236,12)'
        }else if (this.props.element['types'][0]['type']['name'] == "bug"){
            backgroundStyles.backgroundColor = 'rgb(90,204,189)'
        }else if (this.props.element['types'][0]['type']['name'] == "poison"){
            backgroundStyles.backgroundColor = 'rgb(188,190,42)'
        }else if (this.props.element['types'][0]['type']['name'] == "water"){
            backgroundStyles.backgroundColor = 'rgb(74,146,228)'
        }else if (this.props.element['types'][0]['type']['name'] == "electric"){
            backgroundStyles.backgroundColor = 'rgb(284,108,15)'
        }else if (this.props.element['types'][0]['type']['name'] == "fairy"){
            backgroundStyles.backgroundColor = 'rgb(184,9,30)'
        }else if(this.props.element['types'][0]['type']['name'] == "ground"){
            backgroundStyles.backgroundColor = 'rgb(146,82,8)'
        }

    }

    return (
      <div className='element' style={backgroundStyles}>
          <div className='element-name'>
            <h3>{this.props.element.species.name}</h3>
          </div>
          <div className='element-order'>
              <h3>#{this.props.element.order}</h3>
          </div>
          
          <img src={this.props.element.sprites.other['official-artwork'].front_default}/>

          <ul className='typeList'>
              {this.props.element.types.map(item=>{

                 return(
                    <li >
                      <PokemonTypes type={item.type.name}/>
                    </li>

                 ) 

                
              })}
          </ul>
          
      </div>
    )
  }
}
