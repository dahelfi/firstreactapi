import React, { Component } from 'react'
import '../styles/movesInfo.scss'


export default class MovesInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            moveValues: []
        }

    }


    componentDidMount(){

       
        let currentPokemon = this.props.currentPokemon;
        let movesLengthCounter = 0;
        let moveValues = [];
        if(currentPokemon.moves.length < 5){
            movesLengthCounter = currentPokemon.moves.length;
        }else{
            movesLengthCounter = 4;
        }

        for (let i = 0; i < movesLengthCounter; i++) {
            let element = currentPokemon.moves[i].move.name;
    
            moveValues.push(element);
        
        }

  
        this.setState({
            moveValues: moveValues
        })


    }




  render() {
      let styles={
          display: (this.props.showOrHide ? "flex" : "none")
      }



     
    return (
      <div className='moves-section' style={styles}>
          <ui>
              {
              
              
              this.state.moveValues.map((item)=>{
                  return <li key={item.id}>
                      <div className='moves-element'>
                          <p>{item}</p>
                      </div>

                  </li>

              })}
          </ui>


      </div>
    )
  }
}
