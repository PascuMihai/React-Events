import React, { Component } from 'react'

export class Counter extends Component {
    

    render() {
        return (
            <div>
                <span>{this.props.count}</span>
                <button onClick={this.props.increment} >Increment</button>
                <button onClick={this.props.decrement} >Decrement</button>
                </div>
        )
    }
}

export default Counter
