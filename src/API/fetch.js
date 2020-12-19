import axios from 'axios';

/**
 * General function to fetch data from external API
 * @param {string} method http method
 * @param {string} endpoint endpoint: eg: /login/close-session
 * @param {object} payload data payload of http request
 * @param {string} url base domain (not required because this is getting by global variable)
 */
const FETCH = async (method, endpoint, payload = {}, url = null) => {
  const URL = url || `${process.env.REACT_APP_BACKEND_URL}${endpoint}`;
  // const Authorization = 'xxx'; // load from .env
  const instance = axios.create({
    headers: {
      'content-type': 'application/json',
      // Authorization: Authorization && `Bearer ${Authorization}`,
    },
  });

  return new Promise((resolve, reject) => {
    const httpMethod = method.toLocaleLowerCase();
    if (instance[httpMethod]) {
      try {
        return resolve(instance[httpMethod](URL, payload));
      } catch (error) {
        return reject(error);
      }
    }
    return reject(new Error('Method not is valid'));
  });
};

export default FETCH;
