document.addEventListener('DOMContentLoaded', getMyLocation);
const focusButton = document.getElementById("focus");
const destButton = document.getElementById("dest");
let map;
let time = new Date();
let hours = timeFormat(time.getHours());
let minutes = timeFormat(time.getMinutes());
let seconds = timeFormat(time.getSeconds());

const kepCoords = {
    latitude: 48.94314364908576,
    longitude:  24.73367598672833

}
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    } else {
        alert("Oops, no geolocation support");
    }
}
function displayLocation(position) {
    if (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let div = document.getElementById("location");

        div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
        div.innerHTML += `(with ${position.coords.accuracy} meters accuracy)`;

        let km = computeDistance(position.coords, kepCoords);
        let distance = document.getElementById("distance");
        distance.innerHTML = `You are ${km} km from the College`;
        if(!map){
            map = mapInit(latitude, longitude);
        }
        setMarker(latitude, longitude, map);
    } else {
        let div = document.getElementById("location");
        div.innerHTML = "Geolocation data is not available.";
    }
}
destButton.addEventListener("click", function() {
            let destinationLatitude = document.getElementById("latitude");
            let destinationLongitude = document.getElementById("longitude");
            if(destinationLatitude.value && destinationLongitude.value){
                setMarker(destinationLatitude.value,destinationLongitude.value,map,destinationLatitude)
            }
        });
function setMarker(latitude, longitude, map) {
    let marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`Твій маркер: ${latitude}, ${longitude}\nЧас:`+Time());
    map.flyTo([latitude, longitude], 17);
}

focusButton.addEventListener('click',function (){
    getMyLocation()
})

destButton.addEventListener('click',function (){

})
function mapInit(latitude,longitude,map){
    map = L.map('map').setView([latitude, longitude], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    return map
}
function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    let errorMessage = errorTypes[error.code];
    if (error.message) {
        errorMessage += " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}
function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371;

    return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
}
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
function timeFormat(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
}
function Time() {
    let time = new Date();
    let hours = timeFormat(time.getHours());
    let minutes = timeFormat(time.getMinutes());
    let seconds = timeFormat(time.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
    }