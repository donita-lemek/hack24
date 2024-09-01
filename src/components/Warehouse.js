import React from 'react';
import { useEffect } from 'react';

function Warehouse() {
    useEffect(()=>{
        geolocator();
    },[]);
    let user_loc=navigator.geolocation;
    function geolocator(){
        if (user_loc){
            user_loc.getCurrentPosition(success);    }
        else{
            
            alert("Your browser doesnt support geolocation");
        }  
      }
      function success(data){
        let lat=data.coords.latitude;
        let long=data.coords.longtitude;

        return lat, long;
      }
  
}

export default Warehouse;