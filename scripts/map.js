if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let mapOptions = {
      center: [latitude, longitude],
      zoom: 10,
    };
    let map = new L.map("map", mapOptions);
    let layer = new L.TileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );

    map.addLayer(layer);
  });
} else {
  console.log("Your browser doesn't support geolocation");
}
