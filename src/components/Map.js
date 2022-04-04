import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker,Popup, Polyline, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../assets/images/star-solid.svg';



class Map extends React.Component{
    render(){
        const style = {
            height: '80vh',
            width: '100%'
        }
        const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor: [-0, -0],
        iconSize:[12,12]
    });
      const styles= {
        fillColor:'none',
        weight: 0.5,
        opacity: 1,
        color:'yellow',
        dashArray: 1,
        fillOpacity: 0.7
    }
    const img ={
        height:'100px',
        width:"100px",
        marginTop:"5%"
    }
    const viewImage = ()=>{
        alert('hello')
    }
    const limeOptions = { color: 'lime', weight:2, }
    const position = [0,0]
        return(
            <div>
                <MapContainer center={position} zoom={2} scrollWheelZoom={true}  style={style}>
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                     {this.props.pointData.map( place => {
                        const point = [place.geometry.coordinates[1], place.geometry.coordinates[0]];
                        console.log(point)
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    <div className="popupdiv">
                                    {place.properties.name}
                                    <img src="https://images.unsplash.com/photo-1648793633175-f3635585014b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={img} onClick={viewImage}/>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                    {this.props.lineData.map((lines) => {
                     return <Polyline key={lines.id} positions={lines.geometry.coordinates} pathOptions={limeOptions} />
                        })}
                    <GeoJSON data={this.props.polygonData} style={styles}/>
                </MapContainer>
            </div>
        )
    }
}

export default Map;