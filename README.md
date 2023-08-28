# Weather App

The Weather App is a web application built using Express.js that allows users to search for a city's weather information and retrieve the temperature in Celsius. This application uses the Handlebars (hbs) view engine and integrates with the Weatherstack API to gather weather data for the specified cities.

<div align=center>
   <img src="https://github.com/AbdelrahmanBayoumi/weather-app/assets/48678280/58eab8e8-8aff-4710-abc2-4d2c1b2e428a" alt="screenshot">
</div>



## Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/AbdelrahmanBayoumi/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Rename the `.env.sample` file to `.env`:

   ```bash
   mv .env.sample .env
   ```

5. Open the `.env` file and replace `API_KEY_HERE` with your actual Weatherstack API key.

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000`.

3. Enter the name of a city into the search field and click the "Search" button.

4. The application will retrieve the current temperature for the specified city and display it on the page.
