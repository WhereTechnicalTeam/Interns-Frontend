import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import Map from './components/Map';
import TableFormData from './components/TableFormData'




class App extends React.Component{
  state ={
    pointData:[],
    lineData:[],
    polygonData:[]
  }
  showLinesData = async ()=>{
    const response = await fetch("http://collectdata2021.herokuapp.com/lineapi")
    const lineData = await response.json();
    this.setState({lineData:lineData.features})
    console.log(lineData)
    }
  showPointsData = async () => {
    const response = await fetch("http://collectdata2021.herokuapp.com/pointapi")
    const pointData = await response.json();
    this.setState({pointData:pointData.features})    
  } 
   
  showPolygonData = async()=>{
        const response = await fetch("http://collectdata2021.herokuapp.com/polygonapi")
        const polygondata = await response.json();
        this.setState({polygonData:polygondata})
    }
  render(){
    const linkstyle ={
    color:'white',
    textDecoration:'none',
    fontWeight:'bold'

  }
    return(
      <div className='container'>
        <div className="row">
          <div className="col-2">
               <ul className='list-group list-group-flush'>
                  <li className='list-group-item text-muted mt-5'><h5>Data types</h5></li>
                  <li className='list-group-item' onClick={this.showPointsData}>points</li>
                  <li className='list-group-item' onClick={this.showLinesData} >Lines</li>
                  <li className='list-group-item' onClick={this.showPolygonData}>Polygon</li> 
               </ul>
          </div>
          <div className="col-10">
            <Router>
              <div className="App">
                <div className='buttons'>
                    <button type="button" className='btn btn-secondary btn-lg'><Link to="/" style={linkstyle}>display map</Link></button>
                    <button type="button" className='btn btn-secondary btn-lg'><Link to="/table" style={linkstyle}>display table</Link></button>
                 </div>
                <Routes>
                  <Route exact path='/' element={< Map pointData={this.state.pointData} lineData={this.state.lineData} polygonData={this.state.polygonData}/>}>
                  </Route>
                  <Route exact path='/table' element={< TableFormData pointData={this.state.pointData} lineData={this.state.lineData} polygonData={this.state.polygonData}/>}></Route>
                </Routes>
              </div>
           </Router>
          </div>
        </div>
      </div>
    )
  }

}
export default App;

