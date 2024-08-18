import React, { Component } from 'react';

// Step 1: Define an interface for the component's state.
// This interface describes the shape of the state object.
interface CounterState {
    count: number; // count is a number.
}

// Step 2: Define the Counter component as a class component.
// It extends React.Component with no props and state defined by CounterState.
class Counter extends Component<{}, CounterState> {
    // Step 3: Initialize the state with a count of 0.
    state: CounterState = {
        count: 0
    };

    // Step 4: Define the increment, decrement and reset method.
    // This method updates the state by incrementing the count.
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
        this.setState({ count: this.state.count = 0 });
    };


    // Step 5: Render the component.
    // The render method returns JSX that displays the current count and a button to increment it.
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

// Step 6: Export the component as default.
export default Counter;
