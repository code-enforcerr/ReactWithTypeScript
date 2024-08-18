import React from 'react';

// Step 1: Define an interface for the props.
// This interface will describe the shape of the props the component expects.
interface GreetingProps {
    name: string; // name prop is expected to be a string.
}

// Step 2: Update the component to use the GreetingProps interface.
// The component is a functional component that takes GreetingProps as its props.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    // Step 3: The return value is a JSX element that displays the name prop.
    return <div>Hello, {name}!</div>;
};

// Step 4: Export the component as default.
export default Greeting;
