import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc35837072514bb88f8acd9d56b55275",
  },
});
