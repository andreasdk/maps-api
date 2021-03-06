# Interactive Frontend Development Milestone Project

[Link to website](https://andreasdk.github.io/maps-api/)


I chose to make the Google Maps API project that allows a user to input a city and then display hotels, bars & restaurants, and tourist attractions from that city on a table.

---

## UX

* The purpose of the website is to be able to select a city, and see hotel, food and tourist attractions info displayed on a Google Map, and on a table. I had implemented animations I learned from a Udemy CSS course, then modified them to suit my design - specifically the hover effect on the navbar items. 
* I added the 'how it works' section, so I could include some images to make the site look more visually interesting, and so it didn't consist solely of a search bar and map. I searched online for the color scheme, and then I played around with some custom map layout from snazzymaps until I found one that suited the website. I also changed the results table alternating row colors to match the color scheme. 


Here is a link to the [mockups folder.](https://github.com/andreasdk/maps-api/tree/master/assets/mockups)

* [Navbar Initial State Desktop](assets/mockups/Navbar_Initial_Desktop.png)
* [Navbar Animation](assets/mockups/Navbar_Animation.png)
* [Navbar Initial State Mobile](assets/mockups/Navbar_Initial_Mobile.png)
* [Navbar Mobile Toggle](assets/mockups/Navbar_Mobile_Toggle.png)

* [Hero Initial State](assets/mockups/Hero_Desktop_Initial.png)
* [Hero Button Hover](assets/mockups/Hero_Desktop_Button_Hover.png)


* [How It Works Desktop](assets/mockups/How_It_Works_Desktop.png)
* [How It Works Mobile](assets/mockups/How_It_Works_Mobile.png)


* [Search Desktop Initial State](assets/mockups/Filter.png)
* [Search Desktop Search Input Click](assets/mockups/Filter_SearchInput_Click.png)
* [Search Mobile Initial State](assets/mockups/Filter_Mobile_Initial.png)
* [Search Mobile Search Input Click](assets/mockups/Filter_Mobile_Click.png)

* [Map Desktop](assets/mockups/Map_Deskop.png)
* [Map Mobile](assets/mockups/Map_Mobile.png)

* [Results Desktop](assets/mockups/Results.png)
* [Results Mobile](assets/mockups/Results_Mobile.png)

* [Footer](assets/mockups/Footer.png)


#### User Stories
* As a user, I want to search for hotel information in a city
* As a user, I want to search for bar information in a city
* As a user, I want to search for restaurant and cafe information in a city
* As a user, I want search for tourist attractions in a city
* As a user, I want to be able to see this information displayed on a map
* As a user, I want to have this information displayed on a table
---

## Features

#### Existing Features
* The first feature is a navbar, with a clickable logo, and links to the How It Works and Map Search sections. I didn't include the results section in the navbar because it is only visible when a user peforms a search.
* The hero section has a background image of a city with an opaque gradient overlay. There is a button that directs to the map search section.
* The how it works section explains the purpose of the page. On medium+ screens, there is a text column and an image column which alternate on each row. They are full width and stack on each other on small screens.
* The map search section has a text input which is clickable to toggle a set of radio buttons. The text input is linked to an autocomplete function, and is used to select the city that the user wants to search in. It is required, and has a red bottom border on click until the user starts to type, and then the border turns yellow.
* The radio buttons are set to display:none, and instead have pseudo radio buttons created in CSS positioned over them. The pseudo buttons can be click to select a category.
* The reset button reinitializes the map, resets the radio button back to the accommodation option, and the autocomplete text back to 'Enter a location'
* The map is zoomed out to show the whole world by default, and zooms in to the user selected city.
* The map has markers which when clicked show information about a hotel/bar/cafe/restaurant/museum/art gallery/park.
* The results table displays the assigned marker and the name of the establishments from the search.

#### Features Left To Implement
* I considered adding more cells to the table, with information pulled from the info-window on the map (websites, phone number, star rating). 

---

## Technologies Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) is the markup language I used to create the website content.
I tried to use semantic HTML where possible.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) was used to style the content of the page. I used CSS to set colors, underline effects, headings, text, hover effects, to set CSS variables, and to make content responsive.
* I used [Bootstrap 4](https://getbootstrap.com/) for responsive grid layout, alignment, column sizing, navigation and utilities.
* I used [Google Fonts](https://fonts.google.com/) for the font families
* I used [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery) to change the navbar background color on scroll, to connect the radio-buttons to a function, to hide the radio buttons until the user clicked on the autocomplete input, to reset the autocomplete value when the reset button is clicked
* I used [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) from the Google Maps API website to generate the map and to set the result section heading to an empty string when the reset button is clicked.
---

## Testing
* I validated my HTML code with [WC3 HTML Validator](https://validator.w3.org) and the empty results section heading is flagged, but this is generated by JavaScript after a user performs a search.
* I validated my CSS code with [WC3 CSS Validator](https://jigsaw.w3.org/css-validator/) and the CSS variables declarations and where they are used throw up errors, but apparently this is normal behaviour as CSS variables are not yet recognized by WC3. The rest of the CSS code validates without error.
* I used [Esprima](http://esprima.org/demo/validate.html) to validate the maps.js file, and the result was that the code was syntactically valid.

* I used Chrome development tools to test how my website looked on mobile and desktop, and to check for errors when executing functions.
* I tested the autocomplete function to see if it suggested cities when I type in some letters and it passed
* On inputting a city, the map populates with markers. Each marker corresponds to a different establishment, and clicking the marker gives information about the establishment name, website, address, type, phone number and star rating. &#10004;
* Inputting a city generated a table with cells for the marker and the name of the  corresponding establishment &#10004;
* Changing the category clears the markers and replaces them with new ones. &#10004;
* Clicking the reset button reinitializes the map, clears the autocomplete input, sets the radio-buttons back to the default checked option, and removes the results heading and table. &#10004;

#### Changes Made From Testing
* Overflow-x to hidden
* I used TinyPNG to compress the images used on the website
* When a user selects category via the radio-buttons before selecting a city, it causes an 'Uncaught TypeError: Cannot read property 'geometry' of undefined at HTMLInputElement.onPlaceChanged (maps.js:357)error' in the console. Because of this, the radio-buttons are hidden until the user clicks on the city search input.
* When a user cycled through the search type categories (hotel, bars, restaurants, attractions), then reset the page, it caused an 'Uncaught TypeError: Cannot read property 'setMap' of undefined' error on the clearMarkers function. To fix this, I search on StackOverflow and replaced the default dropMarkers code with the workaround suggested there.

<dl>
  <dt>Navbar</dt>
  <dd>Background color animation on hover &#10004;</dd>
  <dd>Text color changes on hover &#10004;</dd>
  <dd>Background color changes on scroll &#10004;</dd>

  <dt>Hero section</dt>
  <dd>Image has gradient to increase text overlay contrast &#10004;</dd>
  <dd>Button text color changes on hover &#10004;</dd>

  <dt>How It Works Section</dt>
  <dd>Images alternate position on each row &#10004;</dd>
  <dd>Images and text stack on mobile screen &#10004;</dd>

  <dt>Search Filter</dt>
  <dd>Search text input has red bottom border when user clicks on it until they input text &#10004;</dd>
  <dd>Search text input has yellow bottom border when user inputs text &#10004;</dd>
  <dd>Radio-buttons are hidden until text input is clicked &#10004;</dd>
  <dd>Search text input has yellow bottom border when user inputs text &#10004;</dd>
  <dd>Reset button reinitializes the map, clears the text input, sets the radio-buttons to default selection, clears the results section and heading &#10004;</dd>
 
  <dt>Map</dt>
  <dd>Markers representing search results drop on page when a search is done &#10004;</dd>
  <dd>infoWindows with establishment data appears when clicking on corresponding marker &#10004;</dd>

  <dt>Results</dt>
  <dd>Establishment name and marker icon appear on results table &#10004;</dd>
  <dd>Information updates on category change &#10004;</dd>
</dl>


---

## Deployment
* I deployed this website via GitHub Pages. [Link to website](https://andreasdk.github.io/api-map)
* There are no differences between the local and deployed websites.
* I developed each section of the website using different branches, and merged them into a master branch, which is the version hosted on GitHub pages. The branches are navbar, hero, how, maps, results and footer. I had a Jasmine testing branch before realizing that Jasmine testing was unsuitable for this project.

---

## Credit

#### Content
* I got the Google Maps Hotels API code from the [Maps Platform](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch) website
* I got the Place Types code from the [Place Types](https://developers.google.com/places/supported_types) page

#### Images
* [Favicon](https://www.favicon.cc/?action=icon&file_id=460437)
* [Logo](https://www.opry.com/nextstage/2019/riley-green)
* [Hero image](https://www.orokotravel.ie/wp-content/uploads/Bangkok-Thailand.jpg)
* [Hotel image](https://unsplash.com/photos/uocSnWMhnAs)
* [Restaurant image](https://unsplash.com/photos/qE1jxYXiwOA)
* [Museum image](https://unsplash.com/photos/oLhTLD-RBsc)

#### Acknowledgements
* I received inspiration for this project from Advanced CSS And Sass on Udemy, the navbar animation, the search input warning border, the pseudo radio-buttons, logo, hero section, and the utility classes.
* I used code found on [Stack Overflow](https://stackoverflow.com/questions/56285748/cannot-read-property-setmap-of-undefined-in-google-maps-api) to fix the setMap error on reset.
* My mentor also helped me out with UX improvement suggestions, such as hiding the radio buttons until a user clicks on the search input, and placing the search filter above the map.
* I also got tips from the Code Institute Slack groups



