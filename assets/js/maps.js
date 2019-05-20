var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': [] };
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

// initializes map
function initMap() {
         //accommodation is checked by default
         document.getElementById("accommodation").checked = true;
      	// map theme from https://snazzymaps.com/style/20053/multi-brand-network
      	var styles = [
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#e5c163"
          }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#c4c4c4"
          }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#e5c163"
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          },
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "geometry",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
          {
            "color": "#e5c163"
          },
          {
            "lightness": "0"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#ffffff"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
          {
            "color": "#e5c163"
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
          {
            "color": "#575757"
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#ffffff"
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.stroke",
          "stylers": [
          {
            "color": "#2c2c2c"
          }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#999999"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
          ]
        }
        ];
        //sets the initial state of the map, the longtitude, langtitute, zoom, streetview and map controls
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 54.525961, lng: 15.255119},
          styles: styles,
          mapTypeControl: false,
          panControl: true,
          zoomControl: true,
          streetViewControl: true
        });
        //grabs info-content from index.html to generate pop-up window on map for each establishment
        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });


        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
        	/** @type {!HTMLInputElement} */ 
        	(
        		document.getElementById('autocomplete')), {
        		types: ['(cities)'],
        		componentRestrictions: countryRestrict
        	});
        places = new google.maps.places.PlacesService(map);

        // hides the filter radio-buttons until user clicks on the autocomplete input
        $("#autocomplete").click(function(){
          $("#radio-filter").toggle();
        });

        autocomplete.addListener('place_changed', onPlaceChanged);
        document.getElementById('accommodation').addEventListener('change', onPlaceChanged);
        document.getElementById('bars').addEventListener('change', onPlaceChanged);
        document.getElementById('restaurants').addEventListener('change', onPlaceChanged);  
        document.getElementById('attractions').addEventListener('change', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
        	'change', setAutocompleteCountry);
        document.getElementById('reset').addEventListener('click', setAutocompleteCountry);
      }

    //reset the map to initial state, clear markers
    function resetbtn() {
    	clearMarkers();
    	clearResults();
    	initMap();
      $('#autocomplete').text("");
    }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
      	if ($("#accommodation").is(':checked')) {
      		var place = autocomplete.getPlace();
      		if (place.geometry) {
      			map.panTo(place.geometry.location);
            console.log(markers);
            map.setZoom(15);
            searchHotels();
          }
          else {
           $('#autocomplete').attr("placeholder","Enter a city");
         }
       }
       else if ($("#bars").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
         map.panTo(place.geometry.location);
         map.setZoom(15);
         searchBars();
       }
       else {
         $('#autocomplete').attr("placeholder","Enter a city");
       }
     }
     else if ($("#restaurants").is(':checked')) {
      var place = autocomplete.getPlace();
      if (place.geometry) {
       map.panTo(place.geometry.location);
       map.setZoom(15);
       searchRestaurants();
     }
     else {
       $('#autocomplete').attr("placeholder","Enter a city");
     }
   }
   else if ($("#attractions").is(':checked')) {
    var place = autocomplete.getPlace();
    if (place.geometry) {
     map.panTo(place.geometry.location);
     map.setZoom(15);
     searchAttractions();
   }
   else {
     $('#autocomplete').attr("placeholder","Enter a city");
   }
 }
}

      // Search for hotels in the selected city, within the viewport of the map.
      function searchHotels() {
      	var search = {
      		bounds: map.getBounds(),
      		types: ['lodging']
      	};

      	places.nearbySearch(search, function(results, status) {
      		if (status === google.maps.places.PlacesServiceStatus.OK) {
      			clearResults();
      			clearMarkers();
            document.getElementById('results-heading').innerHTML = "Results";
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
            	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            	var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
              	position: results[i].geometry.location,
              	animation: google.maps.Animation.DROP,
              	icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }
      // Search for bars and night clubs in the selected city, within the viewport of the map.
      function searchBars() {
      	var search = {
      		bounds: map.getBounds(),
      		types: ['bar', 'night_club']
      	};

      	places.nearbySearch(search, function(results, status) {
      		if (status === google.maps.places.PlacesServiceStatus.OK) {
      			clearResults();
      			clearMarkers();
            // Create a marker for each bar found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
            	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            	var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
              	position: results[i].geometry.location,
              	animation: google.maps.Animation.DROP,
              	icon: markerIcon
              });
              // If the user clicks a bar marker, show the details of that bar
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }
      // Search for cafes and restaurants in the selected city, within the viewport of the map.
      function searchRestaurants() {
      	var search = {
      		bounds: map.getBounds(),
      		types: ['cafe', 'restaurant']
      	};

      	places.nearbySearch(search, function(results, status) {
      		if (status === google.maps.places.PlacesServiceStatus.OK) {
      			clearResults();
      			clearMarkers();
            // Create a marker for each restaurant found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
            	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            	var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
              	position: results[i].geometry.location,
              	animation: google.maps.Animation.DROP,
              	icon: markerIcon
              });
              // If the user clicks a restaurant marker, show the details of that restaurant
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }
      // Search for tourist attractions in the selected city, within the viewport of the map.
      function searchAttractions() {
      	var search = {
      		bounds: map.getBounds(),
      		types: ['art_gallery', 'museum', 'park']
      	};

      	places.nearbySearch(search, function(results, status) {
      		if (status === google.maps.places.PlacesServiceStatus.OK) {
      			clearResults();
      			clearMarkers();
            // Create a marker for each attraction found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
            	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            	var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
              	position: results[i].geometry.location,
              	animation: google.maps.Animation.DROP,
              	icon: markerIcon
              });
              // If the user clicks an attraction marker, show the details of that attraction
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }
      //clears markers from map, empties markers array
      function clearMarkers() {
      	for (var i = 0; i < markers.length; i++) {
      		if (markers[i]) {
      			markers[i].setMap(null);
      		}
      	}
      	markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
      	var country = document.getElementById('country').value;
      	if (country == 'all') {
      		autocomplete.setComponentRestrictions({'country': []});
      		map.setCenter({lat: 15, lng: 0});
      		map.setZoom(2);
      	} else {
      		autocomplete.setComponentRestrictions({'country': country});
      		map.setCenter(countries[country].center);
      		map.setZoom(countries[country].zoom);
      	}
      	clearResults();
      	clearMarkers();
      }
      // sets markers on map
      function dropMarker(i) {
      	return function() {
          console.log(markers);
          markers[i].setMap(map);
        };
      }

      function addResult(result, i) {
      	var results = document.getElementById('results');
      	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
      	var markerIcon = MARKER_PATH + markerLetter + '.png';

      	var tr = document.createElement('tr');
      	tr.style.backgroundColor = (i % 2 === 0 ? '#46344E' : '#5A5560');
      	tr.onclick = function() {
      		google.maps.event.trigger(markers[i], 'click');
      	};

      	var iconTd = document.createElement('td');
      	var nameTd = document.createElement('td');
      	var icon = document.createElement('img');
      	icon.src = markerIcon;
      	icon.setAttribute('class', 'placeIcon');
      	icon.setAttribute('className', 'placeIcon');
      	var name = document.createTextNode(result.name);
      	iconTd.appendChild(icon);
      	nameTd.appendChild(name);
      	tr.appendChild(iconTd);
      	tr.appendChild(nameTd);
      	results.appendChild(tr);
      }


      function clearResults() {
      	var results = document.getElementById('results');
      	while (results.childNodes[0]) {
      		results.removeChild(results.childNodes[0]);
      	}
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
      	var marker = this;
      	places.getDetails({placeId: marker.placeResult.place_id},
      		function(place, status) {
      			if (status !== google.maps.places.PlacesServiceStatus.OK) {
      				return;
      			}
      			infoWindow.open(map, marker);
      			buildIWContent(place);
      		});
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
      	document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      	'src="' + place.icon + '"/>';
      	document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      	'">' + place.name + '</a></b>';
      	document.getElementById('iw-address').textContent = place.vicinity;

      	if (place.formatted_phone_number) {
      		document.getElementById('iw-phone-row').style.display = '';
      		document.getElementById('iw-phone').textContent =
      		place.formatted_phone_number;
      	} else {
      		document.getElementById('iw-phone-row').style.display = 'none';
      	}

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
        	var ratingHtml = '';
        	for (var i = 0; i < 5; i++) {
        		if (place.rating < (i + 0.5)) {
        			ratingHtml += '&#10025;';
        		} else {
        			ratingHtml += '&#10029;';
        		}
        		document.getElementById('iw-rating-row').style.display = '';
        		document.getElementById('iw-rating').innerHTML = ratingHtml;
        	}
        } else {
        	document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
        	var fullUrl = place.website;
        	var website = hostnameRegexp.exec(place.website);
        	if (website === null) {
        		website = 'http://' + place.website + '/';
        		fullUrl = website;
        	}
        	document.getElementById('iw-website-row').style.display = '';
        	document.getElementById('iw-website').textContent = website;
        } else {
        	document.getElementById('iw-website-row').style.display = 'none';
        }
      }