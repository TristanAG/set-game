import React from 'react'

class Card extends React.Component{
  //i'm gonna make it so that when you select a card, there is an indicator
  constructor(props){
    super(props)
    this.handleSelectCard = this.handleSelectCard.bind(this)

    // let selected = false;
    // let cardClass = 'card-two'

    this.state = {
      selected: false,
      class: 'card',
      amount: props.amount,
      shape: props.shape,
      fill: props.fill,
      color: props.color,
    }
  }

  handleSelectCard(props){
    if(this.state.selected === false){
      this.setState(() => ({
        selected: true,
        class: 'card selected'
      }))
    } else {
      this.setState(() => ({
        selected: false,
        class: 'card'
      }))
    }


    this.props.showSelected(this.props)
  }

  render(){
    return(
      <div>
        <p>{this.state.selected}</p>
          <img
            onClick={this.handleSelectCard}
            className={this.state.class}
            src={this.props.asset}
            alt={this.props.altText}
          />
      </div>
    )
  }
}

export default Card
