import FETCH from './fetch';
import endpoint from './endpoints';

export default {
  async getRepos(username) {
    const response = await FETCH('get', endpoint.getReposByUser.replace('username', username));
    return response;
  },
};
