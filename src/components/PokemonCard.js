import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import BaseStatsInfo from './BaseStatsInfo';
import MovesInfo from './MovesInfo';
import AboutInfo from './AboutInfo';

export default class PokemonCard extends Component {
    constructor(props){
        super(props);

        this.state= {
            showAbout: true,
            showBaseStats: false,
            showMoves: false
        }


       

    }

    showOrHide(category){

  
        let enable = true;
        let disable = false;

        if(category == 'about'){
            this.setState({
                showAbout: enable,
                showBaseStats: disable,
                showMoves: disable
            })

        }else if(category == 'baseStats'){
            this.setState({
                showAbout: disable,
                showBaseStats: enable,
                showMoves: disable
            })

        }else if(category == 'moves'){
            this.setState({
                showAbout: disable,
                showBaseStats: disable,
                showMoves: enable
            })

        }
        
    }


    retreatToOverview(){
        this.props.retreatOverview();
    }

    stopPropagation(event){
        event.stopPropagation();
    }



  render() {

    if(this.props.currentPokemon != null){

        let currentPokemon = this.props.currentPokemon;

        let backgroundStyles = {
          backgroundColor: 'rgb(240,188,128)'
        }

        let displayManagement = {
            display: (this.props.showAndHide ? "flex" : "none")
        }
       

        let borderLineAbout = {
            borderBottom: (this.state.showAbout ? "2px solid rgb(90,204,189)" : "2px solid black") 
        } 
        let borderLineBaseStats = {
            borderBottom: (this.state.showBaseStats ? "2px solid rgb(90,204,189)" : "2px solid black")
        } 
        let borderLineMoves = {
            borderBottom: (this.state.showMoves ? "2px solid rgb(90,204,189)" : "2px solid black")
        } 
  
      {
       
          if(currentPokemon['types'][0]['type']['name'] == "grass"){
              backgroundStyles.backgroundColor = 'rgb(25,170,37)'
          }else if (currentPokemon['types'][0]['type']['name'] == "fire"){
              backgroundStyles.backgroundColor = 'rgb(184,9,30)'
          }
          else if (currentPokemon['types'][0]['type']['name']  == "flying"){
              backgroundStyles.backgroundColor = 'rgb(240,236,12)'
          }else if (currentPokemon['types'][0]['type']['name'] == "bug"){
              backgroundStyles.backgroundColor = 'rgb(90,204,189)'
          }else if (currentPokemon['types'][0]['type']['name']  == "poison"){
              backgroundStyles.backgroundColor = 'rgb(188,190,42)'
          }else if (currentPokemon['types'][0]['type']['name']  == "water"){
              backgroundStyles.backgroundColor = 'rgb(74,146,228)'
          }else if (currentPokemon['types'][0]['type']['name']  == "electric"){
              backgroundStyles.backgroundColor = 'rgb(284,108,15)'
          }else if (currentPokemon['types'][0]['type']['name']  == "fairy"){
              backgroundStyles.backgroundColor = 'rgb(184,9,30)'
          }else if(currentPokemon['types'][0]['type']['name']  == "ground"){
              backgroundStyles.backgroundColor = 'rgb(146,82,8)'
          }
  
      }
      return (
          <div className='pokemon-card-background' style={displayManagement} onClick={()=> this.retreatToOverview()}>
  
              <div className='pokemon-card' onClick={(event)=>this.stopPropagation(event)}>
                  <div className='pokemon-card-top-section' style={backgroundStyles}>
                      <h1>{currentPokemon.species.name}</h1>
                    
  
                  </div>
                  <div className='pokemon-card-bottom-section'>
                      <img src={currentPokemon.sprites.other['official-artwork'].front_default}/>
                      <div className='description'>
                          <div style={borderLineAbout} onClick={()=>this.showOrHide('about')} className='testElement'><h2>about</h2></div>
                          <div style={borderLineBaseStats} onClick={()=>this.showOrHide('baseStats')}><h2>base stats</h2></div>
                          <div style={borderLineMoves} onClick={()=>this.showOrHide('moves')}><h2>moves</h2></div>
                      
                      </div>
                        <div className='facts-section'>
                        <AboutInfo currentPokemon={currentPokemon} showOrHide={this.state.showAbout}/>

                        <BaseStatsInfo currentPokemon={currentPokemon} showOrHide={this.state.showBaseStats}/>

                        <MovesInfo currentPokemon={currentPokemon} showOrHide={this.state.showMoves}/>

                        </div>
                     
                      
                  </div>
  
              </div>
  
              
          </div>
  
      )

    }else{
        return(
            <div></div>
        )
    }
     
  }
}
