import axios from "axios";
var httpIns= axios.create({
  baseURL:"https://api.github.com",
  timeout:30000,
})
export default httpIns
