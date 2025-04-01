import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
            <p>City: {user.address.city}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export default User