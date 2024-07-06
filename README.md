# Blutech Solutions Test Project

This project implements a UI design based on a Figma design and integrates with an API endpoint using API Context state management. It serves as a test project for the Remote Front-End Software Engineer position at Blutech Solutions LLC.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Technologies Used](#technologies-used)
- [Project Features](#project-features)
- [Setup Instructions](#setup-instructions)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Run the development server](#run-the-development-server)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshots

#### Screenshot 1: Homepage

![Homepage](/public/images/Screenshot.png)

#### Screenshot 2: Products List with Pagination

![Products List with Pagination](/public/images/Screenshot-10perPage.png)

#### Screenshot 3: Search Functionality

![Search Functionality](/public/images/Screenshot-with-search.png)

#### Screenshot 4: Dark Mode

![Dark Mode](/public/images/Screenshot-darkMode.png)

#### Screenshot 5: Mobile View

![Mobile View](/public/images/Screenshot-mobile.png)

#### Screenshot 6: Mobile Navigation

![Mobile Navigation](/public/images/Screenshot-mobile-with-nav.png)

#### Screenshot 7: Active Mobile Navigation

![Active Mobile Navigation](/public/images/Screenshot-mobile-with-nav-active.png)

### Links

- Live Site URL: [Blutech Solutions LLC](https://bluetech-department-list-react.vercel.app/)
  (Note: The live site may not display data due to insecure API endpoint)
- GitHub URL: [Repository](https://github.com/stephen-gift/bluetech-department-list-react.git)

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **Chakra UI** - A flexible and accessible UI component library for React.
- **API Context** - A React feature for managing application state in a way that can be easily accessed by nested components. [Learn more](https://reactjs.org/docs/context.html).

## Project Features

- **Functional UI**: Implements the provided Figma design, ensuring a visually appealing and user-friendly experience.
- **API Integration**: Fetches data from the API endpoint (`http://3.88.1.181:8000/products/public/catalog`) and renders it effectively.
- **State Management**: Utilizes API Context to manage the fetched product data, making it accessible throughout the application's components.

## Setup Instructions

### Clone the repository

```bash
git clone https://github.com/stephen-gift/bluetech-department-list.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

This will start the development server, typically accessible on [http://localhost:3000](http://localhost:3000) by default.

## My Process

During the development of this project, I followed a structured approach to ensure clarity and efficiency in implementation. Here are the key steps I took:

1. **Planning and Design**: I started by analyzing the provided Figma design and breaking it down into components and functionality requirements.
2. **Setting Up the Environment**: I initialized the project using Create React App for its flexibility and integrated Chakra UI for consistent and accessible UI components.
3. **API Integration**: Utilizing Axios, I connected to the API endpoint (http://3.88.1.181:8000/products/public/catalog) to fetch and manage product data throughout the application.
4. **State Management**: I leveraged API Context in React to centrally manage and distribute the fetched product data across various components, ensuring seamless updates and reactivity.
5. **Styling and Responsiveness**: Using Chakra UI's responsive design utilities, I ensured the application adapts well across different screen sizes, maintaining a functional and visually appealing layout.

Challenges Faced:

- One of the main challenges was handling asynchronous data fetching and ensuring smooth state transitions across the application.
- Integrating complex UI components while adhering to the design specifications posed another challenge, which I addressed through careful component composition and styling adjustments.

### Built With

The project was built using the following technologies:

- React
- Chakra UI
- Axios
- TypeScript
- Chakra Icons

### What I Learned

Through this project, I deepened my understanding and skills in several areas:

- **React**: Gained more experience in using React for building dynamic and interactive UIs.
- **Responsive Design**: Chakra UI's responsive design utilities allowed me to create a user-friendly experience across various devices without extensive custom CSS.
- **State Management with API Context**: Implementing API Context provided me with a scalable way to manage global application state, improving data flow and reusability of components.

### Continued Development

Looking ahead, I aim to focus on refining my skills in:

- Advanced TypeScript usage, including more complex type definitions and generics.
- Optimizing API calls and handling larger datasets efficiently using pagination and caching techniques.
- Exploring more sophisticated UI animations and transitions to enhance user interaction and engagement.

### Useful resources

- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started) - Comprehensive guide for building accessible and responsive UI components.
- [Axios Documentation](https://axios-http.com/docs/intro) - Essential resource for making HTTP requests and handling responses in JavaScript applications.
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) - Detailed reference for mastering TypeScript's advanced features and best practices.

## Author

- Portfolio - [Stephen Gift Dada](https://www.yourportfolio.com)
- LinkedIn - [Your LinkedIn Profile](https://www.linkedin.com/in/stephen-gift-8894131b6)
- GitHub - [@stephen-gift](https://github.com/stephen-gift)
- Email - [stephengift43@gmail.com](mailto:stephengift43@gmail.com)
