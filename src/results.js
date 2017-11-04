import React, {Component} from 'react'

export default class Results extends Component {


  render(){

    let messageListLi
    if (this.props.myMessageList != null) {
      messageListLi  = this.props.myMessageList.map((message, i)=>
        <li key={i}>{message}</li>
      )
    } else {
      messageListLi = null
    }


    return(
      <div style={{background:'blue', color:'yellow', height:100, width:300}}>
        <ul>
          {messageListLi}
        </ul>
      </div>
    )
  }

}
