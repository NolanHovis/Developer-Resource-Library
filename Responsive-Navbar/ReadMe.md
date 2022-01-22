# Responsive Nav Bar


A simple nav bar with responsive design and easy to add to your project.

There are some changes that may need to made to the CSS Selectors, however they will be noted below.


## Table of Contents

- [Responsive Nav Bar](#responsive-nav-bar)
  - [Table of Contents](#table-of-contents)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Class: list](#class-list)
    - [Class: list-item](#class-list-item)
    - [Class: full-nav](#class-full-nav)
    - [Class: nav-container](#class-nav-container)
    - [Class: nav-title](#class-nav-title)
    - [Class: hamburger](#class-hamburger)

<hr />

<a name="colors"></a>

### Colors
The colors are stored as variables --primary, --secondary, and --text.
Change the hex values and you can adapt them to your color scheme.

<hr />

<a name="fonts"></a>

### Fonts
The fonts are set up using the * selector. If you want the same font you can keep it, if your fonts are set up, you should be fine to leave it out. 

There is also have a "reset" in my * selector. This is necessary for the navigation bar. Default HTML pages have a border, so without this, there would be space around the nav bar and the edge of your page

<hr />

<a name="list"></a>

### Class: list
THe first instance of this class resets the list-style-type to "none." This is so that the default styles for a ul tag won't be there.

On to mobile:
- Position is absolute so we can place it where we want it when we want it there
- Right is set to 0 so that it is all the way to the right
- We set the display to flex adn the flex direction to a column to change it from a row(row on desktop, column on mobile)
- Set the flex to "1 1 0%" to set the space available to grow
- The margin is set to lower the list and offset it to make it look like it is coming from off the screen
- We move it over on the x axis 100% so that it is not visible from the start
- Set the opacity to 0 for extra mesure and a fade in effect when it shows
- Define a width for your menu

The expanded class is what allows us to bring the menu into view.
- We dynamically add this class in the JS file with a query selector and toggle the expanded class when the hamburger menu is clicked.

<hr />

<a name="list-item"></a>

### Class: list-item
- List Item refers to the li tags inside the ul. 
- The padding is for the space around them. This spaces the words from eachother and sets us up well for the hover actions
- The margin is to create actual space between the li elements
- The border-radius helps us for our hover action
- The transition makes the transition between the hover and the "unhover" smooth
- In our list-item:hover we add a background color
- Then we added a hover for our a tag to change the font color as well

<hr />

<a name="full-nav"></a>

### Class: full-nav
"full-nav" is a class we add to our nav tag. 
- position fixed helps us to make the nav stick to the top of the DOM
- top sets the location of the nav from the top. Setting it to 0 lets us make sure its all the way at the top. Same goes for setting right to 0.
- Make sure the width is 100% or 100vw, to span all the way accross
- Then we define our colors

<hr />

<a name="nav-container"></a>

### Class: nav-container
The nav-container class wraps around the content inside our nav bar. There are two main purposes for this. One being to keep this content together on wider screens so that our logo and menu items are not all the way to the right and left of the screen. Two being to keep our elements in a row.

- Max width sets the elements to not go past this width even if the screen is super wide
- Setting display to flex puts the content in a row
- Justifying our items to "space-between" taked the extra space in the row and puts it between the logo and the menu
- Aligning the items aligns them vertically
- The padding helps give the nav bar room to breathe
- The margin keeps the contents always centered

<hr />

<a name="nav-title"></a>

### Class: nav-title
This class allows for a logo, or image, and text to be displayed in a row

<hr />

<a name="hamburger"></a>

### Class: hamburger
The hamburger is the three lines that display on mobile.
so we set the display to none for desktop

- .hamburger span sets our initial styles that are common amongst each element.
- Next we assign the hamburger hover event so that the middle span moves over slightly
- Then we have the active class that toggles on the hamburger div element. This class allows us to rotate the top and bottom span to form an "x," then make the middle span disappear.
- We use another query selector inside the same click event to to this in our JS file.
- Inside the media query we add a margin to this, so that it is spaced away from the logo. Then display it as a flex column so that our spans are above eachother