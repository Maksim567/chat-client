import React, { Component } from 'react'

class List extends Component {

    renderUsers(users) {
        if (users) {
            return users.map(({id, name}) => <li key={id}>{name}</li>)
        }

        return null
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.getUsers}
                >
                    CLICK HERE TO GET USERS
                </button>
                <ul>
                    {this.renderUsers(this.props.users)}
                </ul>
            </div>
        )
    }
}

export default <List></List>