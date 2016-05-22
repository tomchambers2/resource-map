$(document).on('ready', function() {
  var locations = $('.resource-map').data().locations;

  var map = new google.maps.Map($('.resource-map').get()[0], {
          center: { lat: 51, lng: 50 },
          zoom: 8
        });

  var markers = [];
  var latlngbounds = new google.maps.LatLngBounds();

  async.each(locations, function(location, cb) {
    var content = '<b>' + location.name + '</b><br>';
    content += location.description ? location.description + '<br>' : '';
    content += location.link ? location.link + '<br>' : '';
    content += location.googlelocation ? location.googleLocation.formatted_address : '';
    var infowindow = new google.maps.InfoWindow({
      content: content
    });
    var marker = new google.maps.Marker({
        position: location.googleLocation.geometry.location,
        map: map,
        title: location.title
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    var latLng = new google.maps.LatLng (location.googleLocation.geometry.location.lat, location.googleLocation.geometry.location.lng)
    latlngbounds.extend(latLng);
    cb();
    markers.push({ marker: marker, infowindow: infowindow });
  }, function() {
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);

    $('.locations li').each(function(i) {
      $(this).on('click', function() {
        markers[i].infowindow.open(map, markers[i].marker);
      });
    });
  });

});
