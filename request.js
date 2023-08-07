const axios = require('axios');


const getCoordi = async (location) => {

  console.log(`Sending request...`);

  // get the data from microervice here
  // can view on console
  try{
    
    const response = await axios.get(`http://localhost:3000/${location}`);

    console.log('Success. Here are the coordinates for your chosen location:');
    console.log(response.data);

  } catch (error) {
    console.error('Error fetching geographical coordinates: Please try again');
  }
};



// replace with any valid city name here. This is function call to get coordinates from microservice to display on console.
// this calls the getCoordi function and should display data from microservice in json formatting/
getCoordi('Chicago');

