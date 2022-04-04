import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const  TableFormData = ({pointData, lineData, polygonData})=>{

      return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">coordinates</th>
                </tr>
                </thead>
               <tbody>{
                        pointData.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tbody>{
                        lineData.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tbody>{
                        polygonData.features.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default TableFormData;
