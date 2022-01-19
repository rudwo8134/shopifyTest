import axios from 'axios';

export const getData = async (number) => {
  const res = await axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${parseInt(number)}`
    )

    .then((resource) => resource.data)
    .catch((err) => {
      console.log(`error, ${err}`);
      return null;
    });
    
  if (!res) {
    return null;
  }
  return res;
};
