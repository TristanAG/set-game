import React from 'react';
import Card from './components/Card'
// import OneDiamondDashedRed from './images/one-diamond-dashed-red.png'
// import OneDiamondEmptyRed from './images/one-diamond-empty-red.png'
// import OneDiamondFilledRed from './images/one-diamond-filled-red.png'
// import OneDiamondDashedPurple from './images/one-diamond-dashed-purple.png'
import cards from './CardDeck'
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
    this.handleSelected = this.handleSelected.bind(this)
    this.state = {
      fill: '$$$',
      amount: '$$$',
      color: '$$$',
      shape: '$$$',
      hand: []
    }
  }

  handleSelected( props ){
    this.setState((prevState) => ({
      // selectedCards: prevState.selectedCards.concat(props),
      // fill: props.fill,
      // amount: props.amount,
      // color: props.color,
      // shape: props.shape,
      // alt: props.alt,
      hand: prevState.hand.concat({
        fill: props.fill,
        amount: props.amount,
        color: props.color,
        shape: props.shape,
        alt: props.alt
      })
    }))
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '',
          padding: '22px',
          height: '800px'
        }}
      >
        <div className="container">
          <div className="row">
            <h3>set-game</h3>
            <p className="message">there are <i>8</i> sets remaining</p>
          </div>
          <div className='row' style={{marginBottom: '80px'}}>
            <div className='columns three'>
              {cards.map((card) => (
                <Card
                  handleSelected={this.handleSelected}
                  isActive={false}
                  key={card.alt + '_hand'}
                  {...card}
                />
              ))}
            </div>
            <div className='columns three'>
                <p>think about this: when you click it, you can make a reference of the index or whatever with the game manager. Then, you can shoot through the array (after you've hit 3) and when you hit the index you can just check if true, then make false. perfecto! you will need to use isActive</p>
            </div>
          </div>
          {/*
            alright, so a bug fires here because when you unclick an item it lists the same key once again.
            this will no longer be an issue when it stops at number 3, and then all selected cards are cleared
            */}
          <div className="row">
            {
              this.state.hand.length > 0
              ? this.state.hand.map((card, i) => (
                <p className="message" key={card.alt + '_selected'}>
                  {card.amount} | {card.shape} | {card.fill} | {card.color}
                </p>
              ))
              : <p>nothing selected</p>
            }
          </div>

          <div className="row">
            <ul>
              <li>also tho, i can get started on the comparison stuff, and be sure to USE JEST to do it!</li>
              <li>really tho, i should probably get the clear isActive state working first</li>
              <li>the big thing now is finding a way to clear all selected. a button / function could do that to test the method</li>
              <li><b>i need the selected status to be a prop then, right?</b></li>
              <li>i should use module package to display if set or !set</li>
              <li>i need to be able to load in some cards and eventually the full deck</li>
              <li><a href="http://puzzles.setgame.com/set/index.html" target="_none">official rules</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
