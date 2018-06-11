<<<<<<< HEAD
var gMap;


function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});
    var marker = new google.maps.Marker({position:{lat:12.432,lng:-43.234}, map:gMap});   
    var marker2 = new google.maps.Marker({position:{lat:41.7934,lng:-87.7754}, map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
    var infoWindow = new google.maps.InfoWindow({content:'Chicago, Illinois'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });
    google.maps.event.addListener(gMap, 'idle', function(){
        updateGame()
    });
}
function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;
    if (gMap.getBounds().contains({lat:41.7934,lng:-87.7754})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomlevel:"+zoomLevel);
}
function initApp() {
    console.log("Map Mania Lite - Starting!");
=======
var gMap;


function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});
    var marker = new google.maps.Marker({position:{lat:12.432,lng:-43.234}, map:gMap});   
    var marker2 = new google.maps.Marker({position:{lat:41.7934,lng:-87.7754}, map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
    var infoWindow = new google.maps.InfoWindow({content:'Chicago, Illinois'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });
    google.maps.event.addListener(gMap, 'idle', function(){
        updateGame()
    });
}
function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;
    if (gMap.getBounds().contains({lat:41.7934,lng:-87.7754})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomlevel:"+zoomLevel);
}
function initApp() {
    console.log("Map Mania Lite - Starting!");
>>>>>>> 2cd12ab19e3ee0aa1c808e37eee61c3aa45f8050
}