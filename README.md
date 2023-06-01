# Alphabin_Weather_App

The Weather App is a web application that allows users to search for weather information based on location. It provides current weather conditions and a forecast for the upcoming days. Users can save their preferred locations and temperature units for future reference.

## Getting Started
 ### Prerequisites
   To run the Weather App, ensure that you have the following installed on your machine:

   - Node.js
   -  MongoDB

### Installation
1. Clone the repository or download the source code.

2. Install the required dependencies by running the following command in the project directory:

   npm install

3. Obtain an API key from OpenWeatherMap. Sign up at https://home.openweathermap.org/users/sign_up and generate an API key.

4. Replace YOUR_OPENWEATHERMAP_API_KEY in index.js with your own OpenWeatherMap API key.

Start the server by running the following command:

node index.js

5. Open your web browser and navigate to http://localhost:8080 to access the Weather App.

### Usage
The Weather App provides a simple and intuitive user interface for searching and viewing weather data.

### Search for Locations
 To search for locations and retrieve weather data:

1. Enter a location in the search input field.
2. Click the "Search" button or press Enter.
3. The app will display a list of search results based on the entered location.
4. Click on a search result to view the weather data for that location.

### View Weather Data
Once you have selected a location, the app will display the weather data, including the current weather conditions and a forecast for the upcoming days.

### Save User Preferences
To save user preferences, such as preferred locations and temperature units:

When viewing weather data for a location, click the "Save" button.
The app will save the location as a preference for future reference.

### Retrieve Saved Locations
To retrieve saved locations:

Click on the "Saved Locations" button.
The app will display a list of all saved locations.

### API Endpoints
The Weather App provides the following API endpoints:


- GET /api/weather - Retrieves weather data for a specific location.
- POST /api/preferences - Saves user preferences, including location and unit.
- GET /api/preferences - Retrieves all saved locations.
- POST /users/register - Register a user.
- POST /users/login - Login a user.


### Technologies Used
The Weather App is built using the following technologies:

- Node.js - JavaScript runtime environment
- Express.js - Web application framework for Node.js
- MongoDB - NoSQL database for storing user preferences and saved locations
- Node-fetch - HTTP client for making API requests