import React from 'react';
function Counter(){
    const count = (a) =>{
        alert(a += 1);
    }

    return(
        <>
            <button onClick={() => count(2)}>Increase the number</button>
            <button onClick={() => count(7)}>Increase the number1</button>

        </>
    )
}

export default Counter;