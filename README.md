# Favourite Emoji Application

## Overview

Favourite Emoji is a web application that allows users to explore and search for their favorite emojis. It provides a visually appealing interface with features like emoji dancing animations, pop-out effects, and smooth search functionality.

## Demo

Visit the hosted application: [Favourite Emoji](https://shah9380.github.io/Favourite-Emoji/)

## Screenshots

### Home Page

![Home Page](https://github.com/shah9380/Favourite-Emoji/assets/130676464/eef730d3-280d-4393-b60f-5b830d8042be)


### Emoji Search

![Emoji Search](https://github.com/shah9380/Favourite-Emoji/assets/130676464/3e4577bc-8ef3-438c-9f16-627ba8b44f42)


### Responsive Design

![Responsive Design](https://github.com/shah9380/Favourite-Emoji/assets/130676464/9859e44c-f335-4488-a9a3-40edaf4bdbec)


## Features

- **Emoji Dancing Animation**: Emojis dance randomly on the screen, providing a playful and engaging experience.

- **Pop-out Effects**: Some emojis randomly pop out to add an extra element of surprise and fun.

- **Smooth Search Functionality**: The search feature is responsive and smooth, updating the displayed emojis in real-time as the user types.

- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience on various devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## JavaScript Elements Explained

### 1. Event Listeners

The application uses event listeners, particularly the `DOMContentLoaded` event and the `input` event for the search functionality. Event listeners ensure that specific functions are executed when certain events occur.

Example:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Your code here
});

searching.addEventListener('input', (event) => {
    // Search functionality code
});
```
2. Keyframe Animations
Keyframe animations are employed for the dancing and size-changing effects of the emojis. These animations are defined in CSS.

Example:

```CSS
@keyframes dance {
    0%, 100% { transform: translate(0, 0); }
    25%, 75% { transform: translate(5px, -5px); }
    50% { transform: translate(0, 0); }
}

.Emoji {
    animation: dance 3s infinite ease-in-out;
}
```

3. Dynamic HTML Element Creation
The application dynamically creates HTML elements for each emoji and its details using JavaScript.

Example:

```javascript
function LoadData(element) {
    const emoji = document.createElement('div');
    emoji.innerHTML = element.emoji;
    emoji.classList.add('Emoji', 'size-change');
    // Other elements creation and styling
}
```
How to Contribute
If you'd like to contribute to the project, follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/new-feature)
Make your changes
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Create a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to explore, contribute, and have fun with Favourite Emoji!

