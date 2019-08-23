let projects = [

  {
    title: "Vice Cracker",
    href: "https://vice-cracker.herokuapp.com/",
    image: "assets/images/vice.jpg",
    alt: "Vice Cracker",
    repo: "https://github.com/mildlysharpcoders/vice-cracker",
    tech: "React, Twilio, bcrypt, cron, moment, passport",
    description: "Vice Cracker is a health application dedicated to help you track your vices. The user can set up various vices and track their consumption. They can also set up target amounts to not exceed for the week. If they exceed them they will get daily texts about a healthier option they chose during configuration. The application also rewards them with encouraginng messages for being under their consumption limit. Streaks of consecutive weeks of below-limit consumption are rewarded with a text, too."
  },  {
    title: "Memory Game",
    href: "https://pblack67.github.io/HW15-MemoryGame/",
    image: "assets/images/shatner.jpg",
    alt: "Memory Game",
    repo: "https://github.com/pblack67/HW15-MemoryGame",
    tech: "React, HTML, CSS, Javascript",
    description: "Star Trek Memory game is a simple front-end application written in React. The user attempts to click on all the tiles displayed on screen. Each time the user clicks on a tile they haven't clicked on before they get a point. However, each time the user makes a selection the application shuffles the tiles in a different order. If a user clicks on a tile twice the game resets their score to zero and they have to start over."
  },
  {
    title: "Scraper Deluxe",
    href: "https://scraper-peb.herokuapp.com/",
    image: "assets/images/scraper.jpg",
    alt: "Scraper Deluxe",
    repo: "https://github.com/pblack67/HW14-Scraper",
    tech: "JavaScript, Modules, Node, Express, Handlebars, MVC, MongoDB, Mongoose, Cheerio",
    description: "Scraper Deluxe is a simple news scraper program that scrapes articles from the Daily Herald Entertainment page. The application searches for article titles, summaries, article links and thumbnail photos and stores them in a Mongo database. The user may select a particular article to view, add or delete comments. The comments are also persisted in the Mongo database."
  },
  {
    title: "Refassign",
    href: "https://refassign.herokuapp.com/",
    image: "assets/images/referee.jpg",
    alt: "Refassign",
    repo: "https://github.com/pblack67/refassign",
    tech: "JavaScript, Modules, Node, Express, Handlebars, MVC, Sequelize, MySql, Nodemailer, Many-to-many database relationship",
    description: "This is a simple referee assignment system for high school sports referees. It was designed to have a better look and feel than the existing monopoly in the assigning space, Arbiter. The application has two basic roles: Admin and Referee. The Admin role maintains the list of available referees and games. It also defines the assignment of referees to games. Each referee only can only be assigned to one game a day which may affect the list of available referees. Each game has a required number of referees associated with it. Once that number of referees has been assigned the list of available referees is blank. When a referee is assigned to a game they get an email notifying them of the time, place and sport of their game. The referee role has one basic page which lists the referee's assigned games. It allows them a read-only view of their schedule to see where/when they need to be."
  },
  {
    title: "Eat Da Burger",
    href: "https://eatdaburger-peb.herokuapp.com/",
    image: "assets/images/burger.jpg",
    alt: "Eat Da Burger",
    repo: "https://github.com/pblack67/HW12-Burger",
    tech: "JavaScript, Modules, Node, Express, Handlebars, MVC, ORM, MySql",
    description:
      'There are some default burgers provided that the user can click on to eat. This moves them to the right column to reflect that they have been consumed. If the user wishes to enjoy them again they can click on the "Enjoy Again" button to move them back to the left column to be eaten. To add a new burger the user types the burger name into the "New Burger Name" field at the top of the page and click the "Add Burger" button.'
  },
  {
    title: "Friend Finder",
    href: "https://friendfinder-peb.herokuapp.com/",
    image: "assets/images/friends.jpg",
    alt: "Friend Finder",
    repo: "https://github.com/pblack67/HW11-FriendFinder",
    tech: "JavaScript, Modules, Node, Express",
    description:
      "This application is a basic friend finder application. The user answers survey questions about their personality and the application finds the best match in the data on the server side. The returned best match is displayed in a modal dialog."
  },
  {
    title: "Bamazon Storefront",
    href: "",
    image: "assets/images/cltool.jpg",
    alt: "Bamazon",
    repo: "https://github.com/pblack67/HW10-Bamazon",
    tech: "JavaScript, Node, Inquirer, MySql",
    description:
      "This is a JavaScript Node command line interface to a storefront sort of like Amazon. The first part of the application is Customer View. It allows a customer to look at products and place orders for them. If the quantity in stock isn't sufficient then the user gets and error message informing them. The second part of the application is the Manager view. It allows the manager to see all of the information about the products including the remaining stock as well as the total sales for the product. The manager also has a view into any items that are low in inventory (quantity in stock is less than 5). They can also add quantity to the inventory as well as add new products to the product list. The third part of the application is the Supervisor view. Supervisors are allowed to view and create departments. Each department has an overhead cost associated with it. The final view displays product sales by department with the total profit calculated."
  },
  {
    title: "CLI Word Guess Game",
    href: "",
    image: "assets/images/cltool.jpg",
    alt: "CLIWordGuessGame",
    repo: "https://github.com/pblack67/HW9-CLIWordGuessGame",
    tech: "JavaScript, Node, Constructors, Modules, Inquirer",
    description:
      "This is a command line interface guessing game with a theme of TV shows. It simply asks the user to guess a letter. After each guess it informs the user of whether their guess was correct. Then it reflects a correct answer by revealing all the occurrences of the letter. It then asks the user for the next guess up until the user runs out of guesses or reveals the last unknown letter."
  },
  {
    title: "Liri",
    href: "",
    image: "assets/images/cltool.jpg",
    alt: "Liri",
    repo: "https://github.com/pblack67/HW8-Liri-Node-App",
    tech: "JavaScript, Node, Constructors, Modules, Inquirer",
    description:
      "LIRI stands for Language Interpretation and Recognition Interface. Liri is a node.js application that takes various text commands as input and outputs information that corresponds to them. It searches for Concerts, Songs, Movies and more!"
  },
  {
    title: "The Binger",
    href: "https://team1-rikafaraahpaul.github.io/Aggregator/index.html",
    image: "assets/images/tablet.jpg",
    alt: "The Binger",
    repo: "https://github.com/pblack67/Binger",
    tech:
      "moment.js, Materialize, Firebase, Jquery, OMDB API, Wikipedia, The Movie DB",
    description:
      "Use The Binger to locate your favorite shows, save to a watchlist and check off the epsiodes you have completed. This helps you track the episodes you have watched for all your binge watching needs."
  },
  {
    title: "Online Rock, Paper, Scissors",
    href: "https://pblack67.github.io/RPS-Multiplayer/",
    image: "assets/images/rock-paper-scissors.jpg",
    alt: "Rock, Paper, Scissors",
    repo: "https://github.com/pblack67/RPS-Multiplayer",
    tech: "HTML, CSS, Bootstrap, JavaScript, Events, jQuery, Firebase",
    description:
      "This application allows two users to play a game of Rock, Paper, Scissors together. There's a simple login screen to capture the user's name. Only two players can be logged in at a time. Then the main game screen appears. Both users choose one of the three options and then the application notifies each player of who won. The wins, losses and ties appear in a score window. The users can then click the Play Again button for another round. Also, there is a chat window so the users can taunt one another during a heated game."
  },
  {
    title: "My Favorite Things",
    href: "https://pblack67.github.io/MyFavoriteThings/",
    image: "assets/images/julie-andrews.jpg",
    alt: "My Favorite Things",
    repo: "https://github.com/pblack67/MyFavoriteThings",
    tech:
      "HTML, CSS, Bootstrap, JavaScript, Events, jQuery, Objects, AJAX, Local Storage, JSON",
    description:
      "This application allows the user to create a collection of their favorite things: GIFs, Movies and Bands. The user creates a query button by typing in the search term, choosing the query type in the dropdown and then clicking the Add button. Clicking the query button will hit the desired back-end API and add the results to the search area. Each search result has a Favorites button. Clicking on this adds the item to the favorites area. These favorites will persist event if the browser is closed and re-opened."
  },
  {
    title: "Opera Trivia Game",
    href: "https://pblack67.github.io/OperaTriviaGame/",
    image: "assets/images/ring2.jpg",
    alt: "Wagner's Ring",
    repo: "https://github.com/pblack67/OperaTriviaGame",
    tech: "HTML, CSS, JavaScript, Events, jQuery, Objects, Timers",
    description:
      "This is an opera trivia game that gives the user a time limit to answer various questions. What? You don't know that much about opera? Take the quiz anyway. You might learn something! There's also a delay between question answers as well. The application keeps track of right and wrong answers as well as no-answers. Those are the worst since you're taunted and not given the correct answer. If you answer the question correctly you're greeted with a picture. A future enhancement may play actual clips from the operas. Don't worry, it won't be hours long."
  },
  {
    title: "Star Wars RPG",
    href: "https://pblack67.github.io/StarWarsGame/",
    image: "assets/images/luke-skywalker2.jpeg",
    alt: "Star Wars RPG",
    repo: "https://github.com/pblack67/StarWarsGame",
    tech: "HTML, CSS, JavaScript, Events, jQuery",
    description:
      "This game simulates basic combat between characteres in a role-playing game. It's a Star Wars theme with several famous characters from over the years. The user selects a character to play. Then they select an enemy to battle from the remaining characters. The Attack button then reduces the hit points of the enemy while the enemy retaliates. The attack and retaliate values are different for each character. Also, the attack value for the character builds with each attack. The user wins if they are able to defeat the enemies before their hit points go to 0 or below."
  },
  {
    title: "Word Guessing Game",
    href: "https://pblack67.github.io/WordGuessGame/",
    image: "assets/images/bears_logo2.png",
    alt: "Go Bears",
    repo: "https://github.com/pblack67/WordGuessGame",
    tech: "HTML, CSS, Bootstrap, JavaScript, Events, Objects",
    description:
      'This is a word guessing game a lot like hangman. It asks for the user to guess the letters of a word corresponding to a famous Chicago Bears player. The user has a limited number of guesses to guess the word. If they are successful then they get a winning graphic and a chorus of "Bear Down, Chicago Bears". The application keeps track of wins and losses as well.'
  }
];

module.exports = projects;
