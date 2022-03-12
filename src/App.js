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
  showLinesData = ()=>{
    const polyline = [
  [
    [ -1.32, 36.8],
    [ -1.25, 36.9]
  ],
  [
    [-1.5, 37.9],
    [-1.4, 36.8]
  ]
]
    this.setState({lineData:polyline})
    }
  showPointsData = async () => {
    const response = await fetch("http://localhost:9000/data/api/nairobihealthfacilities")
    const pointData = await response.json();
    this.setState({pointData:pointData})
        
  }
   
  showPolygonData = async()=>{
        const response = await fetch("http://localhost:9000/data/api/nairobisubcounties")
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

