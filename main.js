let latitude = 22.7868542, longitude = 88.3643296; 
// Initializing Mapbox 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({ 
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [longitude, latitude], 
zoom: 4 }); 
map.addControl( new MapboxGeocoder({ 
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl }) );

    var img1=document.querySelector("#CM")
    var marker1 = new mapboxgl.Marker({ element: img1 }) .setLngLat([78.4747, 17.3616]) .addTo(map);
    var img2=document.querySelector("#GT")
    var marker2 = new mapboxgl.Marker({ element: img2 }) .setLngLat([74.8765, 31.6200]) .addTo(map);
    var img3=document.querySelector("#QM")
    var marker3 = new mapboxgl.Marker({ element: img3 }) .setLngLat([77.1855, 28.5245]) .addTo(map);
    var img4=document.querySelector("#TM")
    var marker4 = new mapboxgl.Marker({ element: img4 }) .setLngLat([78.0421, 27.1751]) .addTo(map);
    var img5=document.querySelector("#VM")
    var marker5 = new mapboxgl.Marker({ element: img5 }) .setLngLat([88.3426, 22.5448]) .addTo(map);