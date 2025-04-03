import React, { Component } from 'react'
import User from './User';

class ListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await fetch(url);
        const users = await res.json();
        this.setState({ users })
    }

    render() {
        const { users } = this.state;

        return (
            users.map(user => <User key={user.id} user={user} />)
        )
    }
}

export default ListUser
