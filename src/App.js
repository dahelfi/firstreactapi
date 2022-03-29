import React, { Component } from 'react'
import './styles/app.scss'
import PokemonOverview from './components/PokemonOverview';
import PokemonCard from './components/PokemonCard';

export default class App extends Component {

  constructor(props){
    super(props);
  
    this.state={
      currentPokemon: null,
      showPokemonCard: false,
      items: [],
    }
    this.showPokemonCard = this.showPokemonCard.bind(this);
    this.retreatToOverview = this.retreatToOverview.bind(this);
    
  }

     
  async componentDidMount(){
    
    for (let i = 1; i < 20; i++) {
      
    let url = 'https://pokeapi.co/api/v2/pokemon/'+i;
    let response = await fetch(url);
    let element = await response.json();

    let items = [...this.state.items];

    items.push(element);

    this.setState({
      items: items,
      currentPokemon: this.state.items[0]
    });

    }

    
   
  }



  retreatToOverview(){
    let testBoolean = false;
    this.setState({
      showPokemonCard: testBoolean
    })

  }

  showPokemonCard(id){
    let testBoolean = true;
    let currentPokemon;
  

    for (let i = 0; i < this.state.items.length; i++) {
      if(i == id -1){
        currentPokemon = this.state.items[i];
     
      }
      
    }

    this.setState({
      showPokemonCard: testBoolean,
      currentPokemon: currentPokemon
    })

    
  }


  render() {
    return(

      <div>
         <PokemonOverview showAndHide={this.state.showPokemonCard} showElement={this.showPokemonCard} items={this.state.items}/>
         <PokemonCard showAndHide={this.state.showPokemonCard} retreatOverview={this.retreatToOverview} currentPokemon={this.state.currentPokemon} />
        <div className="background"/>
        </div>
    

    )
}



}



    
   


  
   


