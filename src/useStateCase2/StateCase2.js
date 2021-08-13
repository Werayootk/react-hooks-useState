import React from 'react';

const StateCase2 = () => {
    let counter = 0;

    const increment = () => {
        counter = counter + 1;
        //counter have value but can't display on UI
        console.log(counter);
    };

    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default StateCase2;

