import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vectordata.css';
import Map from './Map';
import TableFormData from './TableFormData';


class VectorData extends React.Component{
    state ={
        buttonId:null
    }
    setButton(id) {
        this.setState({ buttonId: id });
    }

 
    render(){
        return(
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4 className="text-center">Data Types</h4>
                    <ul>
                        <li>Point</li>
                        <li>Line</li>
                        <li>Polygon</li>
                    </ul>
                </div>
               <div className="col-10">
                        <button type="button" className="btn btn-light btn-lg" onClick={() => this.setButton(0)} value="Map"
                            ref="button" >Map</button>
                        <button type="button" className="btn btn-light btn-lg" onClick={() => this.setButton(1)} value="TableFormData"
                            ref="button1" >Table</button>
                <div className="content">
                            {this.state.buttonId === 0 && <Map />}
                            {this.state.buttonId === 1 && <TableFormData />}
                            {this.state.buttonId !== 0 && this.state.buttonId !== 1 && <Map />}
                </div>
               </div>
            </div>
        </div>
            
        );
    }
} 
export default VectorData;