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
      class: 'tacos'
    }
  }

  handleSelectCard(props){
    if(this.state.selected === false){
      this.setState(() => ({
        selected: true,
        class: 'hotdogs'
      }))
    } else {
      this.setState(() => ({
        selected: false,
        class: 'tacos'
      }))
    }
    
    console.log(this.state.selected)
    this.props.showSelected(this.props)
  }

  render(){
    return(
      <div
        onClick={this.handleSelectCard}
        className={this.state.class}
      >
        <p>{this.state.selected}</p>
          <img
            className='card-two'
            src={this.props.asset}
            alt={this.props.altText}
          />
      </div>
    )
  }
}

export default Card
