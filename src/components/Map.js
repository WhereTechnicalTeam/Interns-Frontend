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
        fillColor:'lime',
        weight: 0.5,
        opacity: 1,
        color:'lime',
        dashArray: 1,
        fillOpacity: 0.7
    }
    const img ={
        height:'100%',
        width:"100px",
        marginTop:"5%"
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
                    {this.props.buttonId === 0 && <div className="container">
                    {this.props.pointData.map( place => {
                        const point = [place.geometry.coordinates[1], place.geometry.coordinates[0]];
                        console.log(point)
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    <div className="popupdiv">
                                    <div>{place.properties.name}</div>
                                    <div>{place.properties.desc}</div>
                                    <div><img src="https://th.bing.com/th/id/R.14cbd2a7d160c5ea940f9ddcf74b6572?rik=K674DAW42U%2f6hw&riu=http%3a%2f%2ficdn.images.touristlink.com%2frepository%2fMA%2fIN%2fEN%2fTR%2fAN%2fC%2funiversity-of-ghana-main-entrance-to-the-balme-lib.jpg&ehk=3racseq%2f57MCkxDHdrITHkL%2foATjve0qrd4hKLGECtY%3d&risl=&pid=ImgRaw&r=0" style={img} alt={place.properties.name}/></div>
                                    <div><img src="https://th.bing.com/th/id/R.96e5d084b49ee0e3a475ad85d8faafd0?rik=Oj5sdTlIaGqs7Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-tj30pcxDs5c%2fUUczFYsWyPI%2fAAAAAAAAA-Q%2f4wTVkRJpD1w%2fs1600%2fUniversity%2bof%2bGhana%2b%2b2191.jpg&ehk=uYsdH%2f5%2fPjtPjnSH3ERS3ndlV%2fnP07Ftvrzlti8FnDE%3d&risl=&pid=ImgRaw&r=0" style={img} alt={place.properties.name}/></div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })} </div>}
                    {this.props.buttonId === 1 && <div className="container">
                    {this.props.lineData.map((lines) => {
                     return <Polyline key={lines.id} positions={lines.geometry.coordinates} pathOptions={limeOptions} />
                        })}
                    </div>}
                    {this.props.buttonId === 2 && <div className="container">
                      <GeoJSON data={this.props.polygonData} style={styles}/>
                    </div>}
                </MapContainer>
            </div>
        )
    }
}

export default Map;