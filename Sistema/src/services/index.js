import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      'http://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
      {
        url: URL,
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
          "Access-Control-Allow-Origin" : "*",
'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',      
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=60363ea6355b8d76608ed02b07754c21',
        {
          params: {
            lat: lat,
            lon: lng,
          },
          headers: {
            'x-rapidapi-host': 'api.openweathermap.org',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            "Access-Control-Allow-Origin" : "*",
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': '*  ',
          'Access-Control-Allow-Credentials': 'true',     
            
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
