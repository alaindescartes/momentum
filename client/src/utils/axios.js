import axios from 'axios';

const axiosInstance = async (url, method = 'GET', data = null) => {
  try {
    const response = await axios({
      method: method.toLowerCase(),
      url: `http://localhost:8888/${url}`,
      data: data,
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error('Error with Axios request:', error);
    throw error;
  }
};

export default axiosInstance;
