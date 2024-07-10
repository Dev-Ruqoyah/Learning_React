import React from "react";
function Car(props){
    return (
        <>
            <h4>These are  {props.brand.color} cars</h4>
        </>
    )
}

function Garage(){
    const carInfo = {name: "ford", color: "Yellow"}
    return (
        <>
            <h3>Who borrow my car?</h3>
            <Car brand = {carInfo}/>
        </>
    )
};

 export default Garage