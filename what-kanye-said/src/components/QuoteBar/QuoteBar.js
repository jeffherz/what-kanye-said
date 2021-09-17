import React from 'react';
import "./QuoteBar.css";
export default function QuoteBar() {

    return (
        <div className="quote-box">
            <div className="quote">
                <h1>This is where the quote goes from the API</h1>
            </div>
            <div className="kanye-name">
                <h2>- Kanye West</h2>
            </div>
        </div>
        
    );
}