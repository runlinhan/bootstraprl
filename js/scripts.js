// instantiate the map object
var map = L.map('mapContainer').setView([40.735021, -73.994787], 11);

//add a dark basemap from carto's free basemaps
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 12,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);




$.getJSON('data/data.geojson', function(jqueryData) {
  


  L.geoJson(communityDistricts).addTo(map);

  //add geojson data from another js file
  L.geoJson(myData, {
    style: function (feature) {
      // generate different color objects based on feature properties

      //var colorsArray = ['red', 'green', 'blue'];
      var customColor;

      if(feature.properties.value == 1) {
        customColor = 'red';
        // customColor = colorsArray[0];
      }

      if(feature.properties.value == 2) {
        customColor = 'blue';
      }

      if(feature.properties.value == 3) {
        customColor = 'green';
      }

      if(feature.properties.value == 4) {
        customColor = 'yellow';
      }

      return {
        color: customColor,
        fillColor: customColor,
        weight: 2,
      };
    },
    onEachFeature: function (feature, layer) {
      layer.on('click', function() {
        // console.log('click!', feature)

        $('#sidebar h2').text(feature.properties.name)
      })
    }
  }).addTo(map);

    console.log(jqueryData)

  //add geojson data that jQuery downloaded and parsed
  L.geoJson(jqueryData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        color: 'orange',
        fillColor: 'steelblue',
        fillOpacity: .9,
        weight: 1,
      });
    }
  }).addTo(map);
  
})

 L.circleMarker(data.coord, {
   color: 'orange',
   fillColor: 'steelblue',
   fillOpacity: .9,
   weight: 1,
  })
