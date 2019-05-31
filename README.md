# Interactive Frontend Development Milestone Project

[Link to website](https://andreasdk.github.io/maps-api/)


I chose to make the Google Maps API project that allows a user to input a city and then display hotels, bars & restaurants, and tourist attractions from that city on a table.

---

## UX

The purpose of the website is to be able to select a city, and see hotel, food and tourist attractions info displayed on a Google Map, and on a table
Here is a link to the [mockup.](***)

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
* I considered adding more cells to the table, with information pulled from the info-window on the map. 

#### Features Changed From Mockup
* ***

---

## Technologies Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) is the markup language I used to create the website content.
I tried to use semantic HTML where possible.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) was used to style the content of the page. I used CSS to set colors, underline effects, headings, text, hover effects, to set CSS variables, and to make content responsive.
* I used [Bootstrap 4](https://getbootstrap.com/) for responsive grid layout, alignment, column sizing, navigation and utilities.
* I used [Google Fonts](https://fonts.google.com/) for the font families
* I used [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery) to change the navbar background color on scroll, to connect the radio-buttons to a function, to hide the radio buttons until the user clicked on the autocomplete input, to reset the autocomplete value when the reset button is clicked
* I used [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) from the Google Maps API website to generate the map
---

## Testing
* I validated my HTML code with [WC3 HTML Validator](https://validator.w3.org) and got 'Document checking completed. No errors or warnings to show.'.
* I validated my CSS code with [WC3 CSS Validator](https://jigsaw.w3.org/css-validator/) and got 'Congratulations! No Error Found.'.

* I used Chrome development tools to test how my website looked on mobile and desktop. I also used c9 as a sort of sandbox for ideas I had, to see how they would look on the site.

#### Changes Made From Testing
* 

<dl>
  <dt>To complete</dt>
  <dd>To complete&#10004;</dd>

  <dt>To complete</dt>
  <dd></dd>

  <dt>To complete</dt>
  <dd>To complete</dd>
  <dd>To complete</dd>

  <dt>To complete</dt>
  <dd>To complete</dd>
 
  <dt>To complete</dt>
  <dd>To complete</dd>
  <dd>To complete</dd>

  <dt>To complete</dt>
  <dd>To complete</dd>

  <dt>To complete</dt>
  <dd>To complete</dd>

  <dt>To complete</dt>
  <dd>To complete</dd>
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
* [Hero image](https://www.orokotravel.ie/wp-content/uploads/Bangkok-Thailand.jpg)
* [Hotel image](https://unsplash.com/photos/uocSnWMhnAs)
* [Restaurant image](https://unsplash.com/photos/qE1jxYXiwOA)
* [Museum image](https://unsplash.com/photos/oLhTLD-RBsc)

#### Acknowledgements




