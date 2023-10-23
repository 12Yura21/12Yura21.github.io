var currentTimeElement = document.getElementById('current-time');
var updateButton = document.getElementById('update-button');
function setCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    currentTimeElement.textContent = hours+":"+minutes+":"+seconds;
}
setCurrentTime();
updateButton.addEventListener('click', setCurrentTime);