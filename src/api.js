import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'e5q-SlO1MPbry74bjNO8sAGqKZhimjwjO0nSAIGIQNo'; 

export const searchImages = async (query) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: { query, per_page: 12 },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    throw new Error('Failed to fetch images. Please try again.');
  }
};
