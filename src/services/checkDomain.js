import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api-checkdomain.herokuapp.com",
  timeout: 20000
});

export default domain => axios.get(`/${domain}`);
