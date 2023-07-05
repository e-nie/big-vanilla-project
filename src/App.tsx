import React from 'react';
import './App.css';

function App() {
    const users = [
        {name: 'ian'},
        {name: 'olly'},
        {name: 'senf'},
        {name: 'klop'},
        {name: 'ploy'}
    ]
    const liElements = users.map((u, index) => <li key={index}>{index} - {u.name}</li>)
    return (
        <div className = "App">
            {liElements}
        </div>
    );
}

export default App;
