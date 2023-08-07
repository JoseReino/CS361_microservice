const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// make coordinates viewable on browser
app.get('/:location', async (req, res) => {

  const { location } = req.params;
  
  const coordinates = await getCoordi(location);


  if (coordinates) {
    res.json(coordinates);
    
  } else {

    res.status(400).json({ error: 'Coordinates for specified location cannot be found' });

  }
});


// communicate with the API to get coordinates of the location that has been specified
const getCoordi = async (location) => {


  try {
    
    // replace with speicfic API key here
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=3eb62a5e65e648cce1634b4b104950e7`);

    const data = response.data[0];

    if (data) {
      // Response can be viewed in terminal

      return {
        location: data.name, latitude: data.lat, longitude: data.lon,
      };
    } else {

      return null;
    }
  } catch (error) {
    console.error('Error fetching geographical coordinates:', error.message);
    
    return null;
  }
};


app.listen(3000, () => {
  console.log(`Microservice is now running. CUrrently listening on port 3000`);
});
