import React, { useState, useMemo } from "react";

const Counter = () =>{
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i =0;
        while(i < 20000000000) i++ //make slower
        
        return counterOne % 2 === 0
    }, [counterOne]); 
    // when counterOne changes, then only recomute the value and assign it to isEven. (not use the cache value)
    // Other renders, get cache value from the preivous renders for the isEven. (not recompute the value)
    
    // IMPORTANT - when we use useMemo for the method, that method become a value (no longer method).

    return(
        <div>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEven ? " Even" : " Odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter;

// Without memo, when click counterTwo button, it also take lot of time to UI update. 
// Bcz, every time state update, the component re-renders. Then isEven function call. But it not want to counterTwo button.
// So,  we need to stop that. We want to execute isEven() and get result only click counterOne button.
// Thats why we need useMemo hook.
// React use cash value
