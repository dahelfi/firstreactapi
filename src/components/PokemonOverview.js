import React, { Component } from 'react'
import '../styles/pokemonOverview.scss'
import PokemonElement from './PokemonElement';

export default class pokemonOverview extends Component {
 

    constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
    
        
      }
    
      async componentDidMount(){
    
        for (let i = 1; i < 100; i++) {
          
        let url = 'https://pokeapi.co/api/v2/pokemon/'+i;
        let response = await fetch(url);
        let element = await response.json();
    
        let items = [...this.state.items];
    
        items.push(element);
    
        this.setState({
          items: items,
        
        });
    
        }

        
       
      }
    
      render() {
        let items = this.state.items;
        //let loaded = this.state.isLoaded;
        let testItem = this.state.items[0];
        console.log("hier dein testitem: ", testItem);
    
    
          return(
            <div className='overview-background'>
               
                { <ul>
                    {items.map(item =>(
                      <li key={item.id}>
                          <PokemonElement element={item}/>
    
                      </li>
                    
                  
                    ))}
    
                </ul>}
            </div>
    
          )
      }
}
