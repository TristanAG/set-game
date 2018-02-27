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
      <div className='card' onClick={this.showInfo}>
        <p>{this.props.type}</p>
      </div>
    )
  }
}

export default Card
