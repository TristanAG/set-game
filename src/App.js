import React from 'react';
import Card from './components/Card'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.showSelected = this.showSelected.bind(this)
    this.state = {
      message: ''
    }
  }

  showSelected( {type} ){
    console.log(type)
    this.setState(() => ({
      message: type
    }))
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <h3>set-game</h3>
          <ul>
            <li><strike>setup app</strike></li>
            <li><strike>create list of 'cards'</strike></li>
            <li>can 'select' up to 3 cards</li>
            <li>selected cards get new border</li>
            <li>be able to display data from selected card(s)</li>
            <li>trigger after 3rd card has been selected</li>
          </ul>
        </div>
        <div className='row'>
          <div className='columns six'>
          <Card type='DD' showSelected={this.showSelected} />
          <Card type='VVV' showSelected={this.showSelected} />
          <Card type='SS' showSelected={this.showSelected} />
          <Card type='OOO' showSelected={this.showSelected} />
          </div>
          <div className='columns six'>
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
