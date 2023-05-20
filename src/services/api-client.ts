import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cbc47f02481642949df44812199b4032",
  },
});
