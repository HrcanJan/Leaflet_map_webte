
var mymap = L.map('map').setView([48.152, 17.073], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGhyY2FuIiwiYSI6ImNrdmZndjYzbjFhbTAyeG1wYmpwb3hleHMifQ.aH6I_yI5u7IlHUuVU6w_DQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([48.1520916,17.0731358]).addTo(mymap);
    
var polygonA = L.polygon([
    [48.151819, 17.073891],
    [48.151955, 17.073891],
    [48.151964, 17.072569],
    [48.151828, 17.072566]
]).addTo(mymap);
       
var polygonB = L.polygon([
    [48.152324, 17.074368],
    [48.152458, 17.074368],
    [48.152465, 17.073416],
    [48.152465, 17.073024],
    [48.152335, 17.073024],
    [48.152323, 17.073408]
]).addTo(mymap);
    
var polygonC = L.polygon([
    [48.152824, 17.073888],
    [48.152967, 17.073891],
    [48.152972, 17.072566],
    [48.152836, 17.072566],
]).addTo(mymap);
        
var polygonD = L.polygon([
    [48.153330, 17.074384],
    [48.153473, 17.074384],
    [48.153475, 17.073215],
    [48.153335, 17.073215],
]).addTo(mymap);
    
var polygonE = L.polygon([
    [48.153836, 17.073907],
    [48.153976, 17.073907],
    [48.153981, 17.072569],
    [48.153831, 17.072569]
]).addTo(mymap);
    
var polygonT = L.polygon([
    [48.154452, 17.072569],
    [48.154450, 17.072826],
    [48.151825, 17.072821],
    [48.151829, 17.072566]
]).addTo(mymap);

var polygonH = L.polygon([
    [48.153979, 17.073718],
    [48.153975, 17.073433],
    [48.151821, 17.073393],
    [48.151821, 17.073723]
]).addTo(mymap);
   
polygonA.bindPopup("Block A");
polygonB.bindPopup("Block B");
polygonC.bindPopup("Block C");
polygonD.bindPopup("Block D");
polygonE.bindPopup("Block E");
polygonT.bindPopup("Block T");
polygonH.bindPopup("Block Hall");
    
var busIcon = L.icon({
    iconUrl: 'img/bus.png',
    iconSize: [40, 40],
	iconAnchor: [16, 37],
	popupAnchor: [0, -28]
});
    
var tramIcon = L.icon({
    iconUrl: 'img/tram.png',
    iconSize: [40, 40],
	iconAnchor: [16, 37],
	popupAnchor: [0, -28]
});

var marker1 = L.marker([48.148324, 17.071953], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Botanická záhrada <br>Lines: 29, 32, N29, N33, N34");
    
var marker1 = L.marker([48.147927, 17.072353], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Botanická záhrada <br>Lines: 29, 32, N29, N33, N34");

var marker1 = L.marker([48.149480, 17.062786], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Riviéra <br>Lines: 32, N33, N34");

var marker1 = L.marker([48.150013, 17.063027], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Riviéra <br>Lines: 32, 139, N33, N34");

var marker1 = L.marker([48.158203,17.068378], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Cintorín Slávičie <br>Lines: 32, 139, N33, N34");
    
var marker1 = L.marker([48.158389, 17.067837], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Cintorín Slávičie <br>Lines: 31, 39, N31");
    
var marker1 = L.marker([48.156015, 17.072002], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Televízia <br>Lines: 31, 39, N31");
    
var marker1 = L.marker([48.156340, 17.071616], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Televízia <br>Lines: 31, 39, N31");
    
var marker1 = L.marker([48.154156, 17.075122], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - ZOO <br>Lines: 31, 39, N31");
    
var marker1 = L.marker([48.154226, 17.075197], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - ZOO <br>Lines: 31, 39, N31");
    
var marker1 = L.marker([48.154621, 17.075777], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - ZOO <br>Lines: 30, 32, 37, 92, 192, N29");
    
var marker1 = L.marker([48.154120, 17.076923], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - ZOO <br>Lines: 30, 32, 37, 92, 192, N29");
    
var marker1 = L.marker([48.163214, 17.076169], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Habanský mlyn <br>Lines: 30, 32, 37, 92, 192, N29");
    
var marker1 = L.marker([48.163897, 17.076465], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Habanský mlyn <br>Lines: 30, 32, 37, 92, 192, N29");
    
var marker1 = L.marker([48.169050, 17.076295], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Patrónka <br>Lines: 21, 25, 30, 37, 43, 63, 83, 84, 92, 130, 192, 207, 211, 212, N21, N37");
    
var marker1 = L.marker([48.168680, 17.076400], {icon: busIcon}).addTo(mymap);
marker1.bindPopup("Bus Stop - Patrónka <br>Lines: 21, 25, 30, 37, 43, 63, 83, 84, 92, 130, 192, 207, 211, 212, N21, N37");

var marker2 = L.marker([48.148077, 17.071602], {icon: tramIcon}).addTo(mymap);
marker2.bindPopup("Tram Stop - Botanická záhrada <br>Lines: 4, 9");
    
var marker2 = L.marker([48.148195, 17.072436], {icon: tramIcon}).addTo(mymap);
marker2.bindPopup("Tram Stop - Botanická záhrada <br>Lines: 4, 9");

var marker2 = L.marker([48.149432, 17.063106], {icon: tramIcon}).addTo(mymap);
marker2.bindPopup("Tram Stop - Riviéra <br>Lines: 4, 9");

var marker2 = L.marker([48.149761, 17.063049], {icon: tramIcon}).addTo(mymap);
marker2.bindPopup("Tram Stop - Riviéra <br>Lines: 4, 9");
    
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a  href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(mymap);
    
L.Routing.control({
    waypoints: [
        L.latLng(48.1585180, 17.0636598),
        L.latLng(48.1520916, 17.0731358)
    ],
    routeWhileDragging: true,
    geocoder : L.Control.Geocoder.nominatim()
}).addTo(mymap);