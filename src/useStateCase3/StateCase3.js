import React, { useState } from 'react';

const StateCase3 = () => {
    const [showText, setShowText] = useState(false);

    const toggleHandler = () => {
        if (showText) {
            setShowText(false);
        } else {
            setShowText(true);
        }
    };

    return (
        <div>
            {showText && <p>This is Text</p>} 
            <button onClick={toggleHandler}>Show Text</button>
        </div>
    );
};

export default StateCase3;

