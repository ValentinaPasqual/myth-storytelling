// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'map', {
  center: [10.0, 5.0],
  minZoom: 2,
  zoom: 2
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<div class="container"><div class="row"><div class="col-3"></div><div class="col-8"><img src=' + markers[i].img + ' width="100"></div><div class="col-3" ></div></div></div>' +
              '<br/><b>Item Title:</b> ' + markers[i].title +
              '<br/><b>Item URI:</b> '  + '<a href=' + markers[i].collocation + '>' + markers[i].item + '</a>' +
              '<br/><b>Collocation Name:</b> ' + markers[i].label +
              '<br/><b>Wikidata:</b> ' + '<a href=' + markers[i].collocation + '>' + markers[i].collocation + '</a>';
              '<br/><b>Represented Categories: </b>' + markers[i].categsLabels;


  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( popup );

  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );





      