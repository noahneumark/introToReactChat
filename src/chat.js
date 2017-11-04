import React, {Component} from 'react'
import {Results} from './'

export default class Chat extends Component {

  constructor(){

    super()
    this.state = {
      message: '',
      messageList: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    this.setState({
      message: e.target.value
    })
  }

  handleClick(){
    let updatedList = Object.assign([], this.state.messageList)
    updatedList.push(this.state.message)
    this.setState({message: '', messageList: updatedList})
  }

  render(){
    let color
    color = 'red'

    const pStyle = {
      color: color,
      fontSize: '1em',
    }

    return (
      <div>
        <input type='text' value={this.state.message} onChange={this.handleInputChange}/> <button onClick={this.handleClick.bind(this)}>Enter</button>
        <p style={pStyle}>
          {this.state.message}
        </p>
        <Results myMessageList = {this.state.messageList}/>
      </div>
    )
  }
}
