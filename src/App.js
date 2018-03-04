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

    // this.deck = [
    //   {
    //     amount: 1,
    //     shape: 'diamond',
    //     fill: 'dashed',
    //     color: 'red',
    //     asset: OneDiamondDashedRed,
    //     alt: 'One Diamond Dashed Red'
    //   },
    //   {
    //     amount: 1,
    //     shape: 'diamond',
    //     fill: 'dashed',
    //     color: 'purple',
    //     asset: OneDiamondDashedPurple,
    //     alt: 'One Diamond Dashed Purple'
    //   }
    // ]

  }

  handleSelected( props ){
    this.setState((prevState) => ({
      // selectedCards: prevState.selectedCards.concat(props),
      fill: props.fill,
      amount: props.amount,
      color: props.color,
      shape: props.shape,
      hand: prevState.hand.concat({
        fill: props.fill,
        amount: props.amount,
        color: props.color,
        shape: props.shape,
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
              {cards.map((card, index) => (
                <Card
                  handleSelected={this.handleSelected}
                  asset={card.asset}
                  amount={card.amount}
                  shape={card.shape}
                  fill={card.fill}
                  color={card.color}
                  alt={card.alt}
                  isActive={false}
                  key={index}
                />
              ))}
            </div>
            <div className='columns three'>
                <p>Map function written! now though, I think it make sense for 'selected' to be a prop, as it should be managed within the game. That makes sense, right? Because when I hit 3 cards (which will be triggered in the 'game manager' or whatever it ends up being called), I will need to dispatch the call for all the 'active' cards to be 'inactive'</p>
            </div>
          </div>
          <div className="row">
              <p className="message">
                {this.state.amount} | {this.state.shape} | {this.state.fill} | {this.state.color}
              </p>

          </div>
          <div className="row">

            <ul>
              <li>I guess the goal is to output the three cards from a deck store now</li>
              <li>What I should do is turn the base data into proper objects store. Every card should be initialized in the store.. you don't need to create a method that renders everything.. it's kind of a waste of time? Unless it's super easy to code, that is.</li>

              <li>it makes more sense to hard code it, because they are const objects</li>
              <li>change name of 'show selected' function</li>
              <li>display the total of amount of the two cards</li>
              <li>i should use module package to display if set or !set</li>
              <li>i need to be able to load in some cards and eventually the full deck</li>
              <li>i should be able to render the entire deck to the screen</li>
              <li>not only do you need to map it to the component, but what you actually need to do is put all of the props into an object, right? that certainly sounds like a way better idea than passing around a ton of props... well... actually it could work</li>
              <li><a href="http://puzzles.setgame.com/set/index.html" target="_none">official rules</a></li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}


export default App;
