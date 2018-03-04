import React from 'react';
import Card from './components/Card'
import OneDiamondDashedRed from './images/one-diamond-dashed-red.png'
import OneDiamondEmptyRed from './images/one-diamond-empty-red.png'
import OneDiamondFilledRed from './images/one-diamond-filled-red.png'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';

/*
  I really need to think about how the card data is actually going to get initialized.
  a card object is a necessity then... how do i set up a card object?
  the object would have the asset, and all the data points
  when you iterate through the deck to populate it, you should be able to populate the cards with their data
  cards.map() => card.asset, card.shape, card.amount, card.color, card.fill
*/

class App extends React.Component {
  constructor(props){
    super(props)
    this.showSelected = this.showSelected.bind(this)

    this.state = {
      fill: '',
      amount: '' ,
      color: '',
      shape: ''
    }
  }

  showSelected( props ){
    this.setState(() => ({
      // selectedCards: prevState.selectedCards.concat(props),
      fill: props.fill,
      amount: props.amount,
      color: props.color,
      shape: props.shape
    }))
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#dde2dc',
          padding: '22px',
          height: '800px'
        }}
      >
        <div className="container">
          <div className='row'>
            <h3>set-game</h3>
            <ul>
              <li><strike>a more proper card css class is needed</strike></li>
              <li><strike>pass that data as an object and display its properties!</strike></li>
              <li>display the total of amount of the two cards</li>
              <li>i should use module package to display if set or !set</li>
            </ul>
          </div>

          <div className='row'>
            <div className='columns six'>
              <Card

                showSelected={this.showSelected}
                asset={OneDiamondDashedRed}
                amount='1'
                shape='diamond'
                fill='dashed'
                color='red'
                alt='terp'
                info='OneDiamondDashedRed'
              />
              <Card
                showSelected={this.showSelected}
                asset={OneDiamondFilledRed}
                amount='1'
                shape='diamond'
                fill='filled'
                color='red'
                alt='terp'
                info='OneDiamondDashedRed'
              />
              <Card
                showSelected={this.showSelected}
                asset={OneDiamondEmptyRed}
                amount='1'
                shape='diamond'
                fill='empty'
                color='red'
                alt='terp'
                info='OneDiamondEmptyRed'
              />


            </div>
            <div className='columns six'>
              <p>{this.state.amount}</p>
              <p>{this.state.shape}</p>
              <p>{this.state.fill}</p>
              <p>{this.state.amount}</p>
            </div>
          </div>
        </div>
    </div>
    )
  }
}


export default App;
