import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://checkdomain-api-0a7240f08f7b.herokuapp.com",
  timeout: 20000
});

export default domain => axios.get(`/${domain}`);
