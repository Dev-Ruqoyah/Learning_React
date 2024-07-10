import React from 'react';
// import ReactDOM from "react-dom/client";
import Components from './componennts/component';
import Garage from './componennts/props';
import Football from './componennts/event';

// import myImage from '.images/images.jpzg';

const Array = ["Mango","Orange", "Cashew"]
const MyList = Array.map((item) => <p>{item}</p>)

const x = 5 ;
// let text = "Goodbye"
// if( x < 10){
//   text = "Hello";
// }


function App() {
  return (
    <div className="App">
      <Components name = "Rukayat" age= "12"/>
      <Components name = "Peace" age  = "22" />
      <Components name = "Peace" age  = "22" />
      <Garage/>
      <Football/>
      {/* <Product image = {myImage} name ={"wristwatch"} details ={"A silver wristwwatch"} /> */}
      {/* <Product image ={image1} name ={"wristwatch"} details ={"A silver wristwwatch"} /> */}
       <li>{MyList}</li>
      <p>{x < 10 ? "Hello" : "Goodbye"}</p>
    </div>
  );
}

export default App;
