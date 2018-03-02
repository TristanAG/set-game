import React from 'react'

class Card extends React.Component{

  constructor(props){
    super(props)
    this.showInfo = this.showInfo.bind(this)
  }

  showInfo(props){
    this.props.showSelected(this.props)
  }

  render(){
    return(
      <div onClick={this.showInfo}>
          <img
            className="card-two"
            src={this.props.asset}
            alt={this.props.altText}
          />
      </div>
    )
  }
}

export default Card
