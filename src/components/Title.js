import React, { Component } from "react";

export default class Title extends Component {
  render() {
      console.log("this the p. to debg",this.props)
    return <h1>{ this.props.content } {this.props.date}</h1>
  }
}