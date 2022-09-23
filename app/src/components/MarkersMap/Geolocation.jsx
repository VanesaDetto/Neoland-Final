import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osmProvider from "./osm-provider";


const Geolocation = ({geolocationValues}) => {
   const array=[geolocationValues.lat , geolocationValues.lng];
   console.log(array)


  return (
     
     <MapContainer center={array} zoom={10} scrollWheelZoom={false}>
       <TileLayer
         attribution={osmProvider.maptiler.attribution}
         url={osmProvider.maptiler.url}
       />
       <Marker position={array}>
         <Popup minWidth={100}>         
              <h3>{geolocationValues.name}</h3>;        
         </Popup>
       </Marker>
     </MapContainer>
  );
};

export default Geolocation;
