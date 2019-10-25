const axios = require("axios");

const http = axios.create({
  baseURL: "https://api-name-gator.herokuapp.com",
  timeout: 10000
});

function request(query) {
  return http.post("/graphql", { query });
}

export default {
  http,
  request
};