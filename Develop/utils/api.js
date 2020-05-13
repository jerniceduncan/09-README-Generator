const axios = require('axios');


const api = {
  getUser(username) {
const queryUrl = `https://api.github.com/users/${username}`;
axios.get(queryUrl).then(function(response){
  return response.data.avatar_url;
})


  }
};

module.exports = api;
