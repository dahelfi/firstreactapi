import React, { Component } from 'react'
import '../styles/aboutInfo.scss'

export default class aboutInfo extends Component {
    constructor(props){
        super(props);
    }


  render() {
      let styles={
          display: (this.props.showOrHide ? "flex" : "none")
      }

      let currentPokemon = this.props.currentPokemon;
    return (
      <div style={styles} className="about-section">
          <div className='about-element'>
              <div className='about-element-description'>
                <p>Species</p>  
              </div>
              <div className='about-section-worth'>
                  <p>{currentPokemon.species.name}</p>
              </div>
          </div>
          <div className='about-element'>
              <div className='about-element-description'>
                <p>Height</p>  
              </div>
              <div className='about-section-worth'>
                  <p>{currentPokemon.height+'"'}</p>
              </div>
          </div>
          <div className='about-element'>
              <div className='about-element-description'>
                <p>Weight</p>  
              </div>
              <div className='about-section-worth'>
                  <p>{currentPokemon.weight+"kg"}</p>
              </div>
          </div>
          <div className='about-element'>
              <div className='about-element-description'>
                <p>Abilities</p>  
              </div>
              <div className='about-section-worth'>
                  <p>{currentPokemon.abilities[0].ability.name+", "+currentPokemon.abilities[1].ability.name}</p>
              </div>
          </div>


      </div>
    )
  }
}
