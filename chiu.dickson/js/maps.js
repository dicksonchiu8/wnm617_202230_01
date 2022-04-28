const makeMap = async (target, center={ lat: 40.518884, lng: -111.950963 }) => {
    await checkData(()=>window.google);

    let map_el = $(target);
    
    if(!map_el.data("map")) map_el.data({
        "map": new google.maps.Map(map_el[0], {
          center,
          zoom: 14,
          disableDefaultUI: true,
          styles: mapStyles,
       }),
      "infoWindow": new google.maps.InfoWindow({content:''}),        
    });

    return map_el;
}


const makeMarkers = (map_el, map_locs=[]) => {
   let {map,markers} = map_el.data();

   if(markers) markers.forEach(m=>m.setMap(null));

   markers = [];

   map_locs.forEach(l=>{
      let m = new google.maps.Marker({
         position: l,
         map,
         icon: {
            url: l.icon + '#custom_marker',
            scaledSize: {
               width:40,
               height:40,
            }
         }
      });
      markers.push(m);
   });

    map_el.data({markers});
    setTimeout(()=>{ setMapBounds(map_el,map_locs); }, 150);
}

const setMapBounds = (map_el, map_locs) => {
   let {map} = map_el.data();
   let zoom = 14;
   
   if(map_locs.length === 1){
        map.setCenter(map_locs[0]);
        map.setZoom(zoom);
   } else if(map_locs.length === 0){
       if(window.location.protocol !== "https:"){
           return;
       } else {
           navigator.geolocation.getCurrentPosition(p=>{
               let pos = {
                   lat:p.coords.latitude,
                   lng:p.coords.longitude,
               };
                map.setCenter(pos);
                map.setZoom(zoom);
           },
           (...args)=>{
                console.log(args)               
           },
           {
               enableHighAccuracy: false,
               timeout: 5000,
               maximumAge:0,
           })
       }
   } else {
       let bounds = new google.maps.LatLngBounds(null);
       map_locs.forEach(l => {
           bounds.extend(l);
       });
       map.fitBounds(bounds);
   }
    
}

const mapStyles = 
[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]

