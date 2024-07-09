import React from 'react';
import ReactDOM from "react-dom/client";

import myImage from '.images/images.jpg';

const Array = ["Mango","Orange", "Cashew"]
const MyList = Array.map((item) => <p>{item}</p>)

const x = 5 ;
// let text = "Goodbye"
// if( x < 10){
//   text = "Hello";
// }
function Person(prop){
  return <h1>Hi {prop.name}, you are  {prop.age} years old</h1>
}
function Product(props){
  return <>
    <img className="{width = 100%}" src = {props.image} alt='Image' />
      <div>
        <p>{props.name}</p> 
        <p>{props.details}</p>
      </div>

  </>
}

function App() {
  return (
    <div className="App">
      <Person name = "Rukayat" age= "12"/>
      <Person name = "Peace" age  = "22" />
      <Product image = {myImage} name ={"wristwatch"} details ={"A silver wristwwatch"} />
      {/* <Product image ={image1} name ={"wristwatch"} details ={"A silver wristwwatch"} /> */}
       <li>{MyList}</li>
      <p>{x < 10 ? "Hello" : "Goodbye"}</p>
    </div>
  );
}

export default App;
