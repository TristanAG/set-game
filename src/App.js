import React from 'react';
import Card from './components/Card'
import OneDiamondDashedRed from './images/one-diamond-dashed-red.png'
import OneDiamondEmptyRed from './images/one-diamond-empty-red.png'
import OneDiamondFilledRed from './images/one-diamond-filled-red.png'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.showSelected = this.showSelected.bind(this)
    this.state = {
      message: '',
      selectedCards: []
    }
  }

  showSelected( props ){
    console.log(props.info)

    //alright, so showSelected actually needs to be a method that takes in the cards and analyzes them.
    //within the card itself is when a hover state will be applied

    this.setState((prevState) => ({
      selectedCards: prevState.selectedCards.concat(props.info),
      message: this.state.selectedCards
    }))

  }

  //what you need to do is create a method that .. or rather, a component that acts as a display of the selected cards
  //you're grabbing that data, because you're going to need to do stuff with it

  render() {
    return (
      <div className="container">
        <div className='row'>
          <h3>set-game</h3>
          <ul>
            <li><strike>setup app</strike></li>
            <li><strike>create list of 'cards'</strike></li>
            <li><strike>can 'select' up to 3 cards</strike></li>
            <li>selected cards get new border</li>
            <li>be able to display data from selected card(s)</li>
            <li>trigger after 3rd card has been selected</li>
          </ul>
        </div>

        <div className='row'>
          <div className='columns six' style={{}}>
            <Card showSelected={this.showSelected} asset={OneDiamondDashedRed} alt='terp' info='OneDiamondDashedRed'/>
            <Card showSelected={this.showSelected} asset={OneDiamondEmptyRed} alt='terp' info='OneDiamondEmptyRed' />
            <Card showSelected={this.showSelected} asset={OneDiamondFilledRed} alt='terp' info='OneDiamondFilledRed'/>

          </div>
          <div className='columns six'>

            <p>{this.state.selectedCards}</p>
            {this.state.selectedCards.length === 3 && <p>got three</p>}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
