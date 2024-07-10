import React from "react";
function Football(){
    const shoot =(props) =>{
        alert(props)
    }
    const shoot1 =(a,b) =>{
        alert(b.type)
    }

    return(

        <>
            <button onClick={shoot('Great Shot')}>Shoot</button>
            <button onClick={(event) => shoot1('Great Shot',event)}>Shoot that</button>
            <div onMouseDown={shoot ('Nice Try')}>Another Shoot</div>
        
        </>
    )
}

export default Football