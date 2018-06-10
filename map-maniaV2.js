var gMap;

var bestPlaces = [
    {"content":"<strong>#1: Bronx, NY... Where Home Is<strong>","coordinates":{"lat":40.8448,"lng":-73.8648}, "iconImagePath":"one.png"},
    {"content":"<strong>#2: Memorial Coliseum<strong>","coordinates":{"lat":34.0141,"lng":-118.2879}, "iconImagePath":"two.png"},
    {"content": "Los Angeles, CA","coordinates":{"lat":34.0522,"lng":-118.2437}, "iconImagePath":"flag.png"},
    {"content":"Baghdad, Iraq","coordinates":{"lat":33.3128,"lng":44.3615}, "iconImagePath":"flag.png"},
    {"content":"Bangkok, Thailand","coordinates":{"lat":13.7563,"lng":100.5018}, "iconImagePath":"flag.png"},
    {"content":"Guadalajara, Mexico","coordinates":{"lat":20.6597,"lng":-103.3496}, "iconImagePath":"flag.png"},
    {"content":"San Juan, Puerto Rico","coordinates":{"lat":18.4655,"lng":-66.1057}, "iconImagePath":"flag.png"},
    {"content":"Barcelona, Spain","coordinates":{"lat":41.3851,"lng":2.1734}, "iconImagePath":"flag.png"},
    {"content":"Liberia, Costa Rica","coordinates":{"lat":10.6346,"lng":-85.4407}, "iconImagePath":"flag.png"},
    {"content":"Kandahar, Afghanistan","coordinates":{"lat":31.6289,"lng":65.7372}, "iconImagePath":"flag.png"},
];


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

    SetHint("This is a hint");
    SetScore(10);

    console.log(bestPlaces.lenth);
    var i;
    for (i = 0; i < bestPlaces.lenth; i++) {
        console.log(bestPlaces[i]);
        AddMarker(bestPlaces[i]);
    }

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
}
function SetHint(hint) {
    document.getElementById("hint-id").value = hint;
}
function SetScore(score) {
    document.getElementById("score-id").value = score;
}

function AddMarker(markerProperties){
    var marker = new google.maps.Marker({position:markerProperties.coordinates, map:gMap});

    if (markerProperties.iconImagePath) {
        marker.setIcon(markerProperties.iconImagePath);
    }

    if (markerProperties.content) {
        var infoWindow = new google.maps.InfoWindow({content:markerProperties.content});
        marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
        });
    }
}