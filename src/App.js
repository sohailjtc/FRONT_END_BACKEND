// src/App.js
import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: inputValue }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Message submitted!');
            setInputValue('');
        } catch (error) {
            console.error('Error submitting message:', error);
            alert('Error submitting message');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Submit a Message</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter message"
                    style={{ padding: '10px', marginRight: '10px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
