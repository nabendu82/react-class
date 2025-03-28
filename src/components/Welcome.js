import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { lang, children } = this.props;
        return (
            <div>
                <h1>Welcome to {lang}</h1>
                <p>{children}</p>
            </div>
        )
    }
}

export default Welcome
