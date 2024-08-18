import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Step 1: Import global styles (if any)
import App from './App';

// Step 2: Find the root element in the HTML file.
const rootElement = document.getElementById('root');

// Step 3: Create a React root and render the App component.
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
