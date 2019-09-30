import React, { Component } from 'react'

import User from './User'

export default class UserBoard extends Component {
    render () {
        return <div>
                <h3>UserBoard</h3>
                <User name='Huey'/>
                <User name='Dewey'/>
                <User name='Louis'/>
            </div>
    }
}