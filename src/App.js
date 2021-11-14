import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VectorData from './components/VectorData';


class App extends React.Component{
  state ={
    data: "hello"
  }
  render(){
    return(
      <div>
        <VectorData/>
      </div>
    );
  }
}
export default App;




