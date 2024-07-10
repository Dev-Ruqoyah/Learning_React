import React from "react";
function Components(props){
    return(
        <>
        <h4>Hi {props.name}, you are {props.age} years old</h4>
        </>
    )
 }
 function Person(prop){
    return <h1>Hi {prop.name}, you are  {prop.age} years old</h1>
  }
  function Product(props){
    return <>
      {/* <img className="{width = 100%}" src = {props.image} alt='Image' /> */}
        <div>
          <p>{props.name}</p> 
          <p>{props.details}</p>
        </div>
  
    </>
  }


   export default Components;
//    export  Person;