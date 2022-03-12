import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const  TableFormData = ({pointData, lineData, polygonData})=>{
      return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">coordinates</th>
                </tr>
                </thead>
                <tbody>{
                        pointData.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.point.coordinates}</td>
                                <td>{item.point.type}</td>
                            </tr>
                        ))
                    }{/*
                    create if else statements from  the state
                    if data===point data
                    if data ===polygon
                    if data === line */}
                </tbody>
            </table>
        </div>
    );
}
export default TableFormData;