# cs260startup
startup project for cs260

## Elevator Pitch and Key Features:
In honor of the **OLYMPIC GAMES** this last summer, and all the **BYU** runners that qualified for the Olympics, I want to make a website to show our love and support for our olympians. This website will have images of each of the BYU athletes at the olympic games and every time you click on their picture the counter goes up for that individual person. There will be a local and a total count value available on different menu screens. I am a member of the BYU Track and Field and Cross Country team, so once I am finished I will show them the product and all the support they have recieved.

## Technologies
### HTML:
 Used for each page, one for login, one for voting, one for total scores
### CSS:
 used to style the page with BYU colors and theme
### JavaScript:
 will provide the login for my page and will apply all votes to each BYU runner individually
### React:
 react to the click of the user on each runners image
### DB:
 will store each users individual votes for the runner and the total global count
### WebSocket:
 update the votes to other users on the global tally

### Model:
![IMG_4240](https://github.com/user-attachments/assets/99443604-e3ec-4d29-b7c1-12feafe5110c)


# HTML STARTUP

HTML pages: 4 added pages. One of which (scores) is formatted much different from the others because I was expirimenting with using chatgpt for help
Good use of HTML tags
Links between pages work properly
Put in the correct content for my website
Place holders put in
Use of many images
Login and user name have been displayed
DataBase and Websocket data place holders


#CSS STARTUP
CSS pages: added css files to go along with every html file for styling
HTML: added bootstrap notation in my HTML files for styling
Header: added with the title of each page and BYU blue styling
Footer: A footer on each page with my name and github link
Main body: different on each page for different purposes. login, a play page with moving pictures and buttons, a scores page to show the scores and an about page to proide information
window is responsive and resizes

#SERVICE
I added a backend service to my startup app using Node.js and Express.js. The backend serves files and handles features like user login and data storage. I set up Vite to connect the frontend to the backend for smooth communication. The app also fetches data from third-party APIs for extra features. Finally, I deployed the app using a custom script, making it live on my production domain.

#LOGIN
 added user login and authentication to my startup application using Node.js, Express.js, and MongoDB. The backend connects to a database, allowing users to create accounts, log in, and securely store credentials using encryption. I created API endpoints to manage user accounts, authenticate login attempts, and restrict certain features based on user access. Data is saved and retrieved from MongoDB, ensuring persistence across sessions. After development and debugging, I deployed the updated app to my production environment using a custom deployment script.

#WS
 added WebSocket support to my startup application, enabling real-time communication between the frontend and backend. The backend listens for WebSocket connections, while the frontend establishes a WebSocket connection upon loading. Messages are sent back and forth, allowing the application to display live updates in the interface. I configured Vite to proxy WebSocket requests during development for easier debugging. After implementing and testing the WebSocket features, I deployed the updated application using a custom deployment script to my production domain. messages should appear each time a user logs in

