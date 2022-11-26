
  var x= document.getElementById("location");  
  function getlocation() {  
      if(navigator.geolocation){  
          navigator.geolocation.getCurrentPosition(showPosition)  
      }  
      else  
      {  
          alert("Sorry! your browser is not supporting")  
      } }  
  
  function showPosition(position){  
  var x = "Your current location is" + "<br />Latitude: " + position.coords.latitude + ", " + "<br/>Longitude: " +    position.coords.longitude;  
              document.getElementById("location").innerHTML = x;  

  // Initialize and add the map
  function initMap() {
  const uluru = { lat: position.coords.latitude, lng: position.coords.longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

