# Gallery of Horns README

This site is to learn React.  And maybe to put up some cool pictures of animals with horns.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Lab 02 Features

### Feature #1: Display Images

Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the beasts' images in the gallery.
How are we implementing it?
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

Estimate of time: 30 minutes
Start time: 10:45
Finish time: 11:00

### Feature #2: Allow Users to Favorite Individual Beasts

Why are we implementing this feature?
As a user, I want to be able to interact with the site and favorite beasts.
What are we going to implement?
Given that a user opens the application in the browser
When a user clicks on an image of a beast
Then the number of "Favorites" displayed on that beast will increase by one.
How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

Put a heart in each HornedBeast component with the number of “Favorites” next to it.

Estimate of time: 30 minutes
Start time: 10:50
Finish time: 11:00

### Feature 3: Bootstrap

Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

Estimate of time: 1 hour
Start time: 12:00
Finish time: 12:30

### Stretch Goal: Add Interaction

Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
What are we going to implement?
    Given that a user opens the application in the browser
    When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
    Then the information and styles should change.
How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.

Estimate of time: 1 hour
Start time: 12:00
Finish time: 12:35
