import React, { Component } from 'react'
import '../styles/pokemonOverview.scss'
import PokemonElement from './PokemonElement';

export default class pokemonOverview extends Component {
 

    constructor(props){
        super(props);
      
    
        
      }

      showElement(id){
        console.log("show element wird ausgeführt");
        this.props.showElement(id);
      }
 
    
      render() {
        let items = this.props.items;
        let styles = {
            display: this.props.showAndHide ? "none" : "flex"
        }

    
    
          return(
            <div className='overview-background' style={styles}>
               
                { <ul>
                    {items.map(item =>(
                      <li key={item.id} > 
                        <div onClick={()=>this.showElement(item.id)}>
                            <PokemonElement element={item}/>
                        </div>
                        
                       
                      </li>
                    
                  
                    ))}
    
                </ul>}
            </div>
    
          )
      }
}
