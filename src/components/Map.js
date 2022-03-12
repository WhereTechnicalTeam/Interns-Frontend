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
        weight: 0.3,
        opacity: 1,
        color:'yellow',
        dashArray: 1,
        fillOpacity: 0.7
    }
    const limeOptions = { color: 'lime' }
    const position = [-1.286389, 36.817223]
        return(
            <div>
                <MapContainer center={position} zoom={12} scrollWheelZoom={true}  style={style}>
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    {this.props.pointData.map((place) => {
                        const point = [place.point.coordinates[1], place.point.coordinates[0]];
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    hey beautiful
                                </Popup>
                            </Marker>
                        );
                    })}
                    <Polyline pathOptions={limeOptions} positions={this.props.lineData} />
                    <GeoJSON data={this.props.polygonData}/>
                </MapContainer>
            </div>
        )
    }
}

export default Map;