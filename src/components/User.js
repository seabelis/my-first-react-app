import React, { Component } from 'react'

export default class User extends Component {
    state = { active: true }
    toggle = () => {
        this.setState({
          active: !this.state.active
        })
      }

    render() {
        return  <div>
                    <p><b>{ this.props.name }</b> is  { this.state.active ? 'present' : 'absent' }</p>
                    <button onClick={this.toggle}>Toggle</button>
                </div>
    }
}