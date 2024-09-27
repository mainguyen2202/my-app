import axios from "axios";

export default axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-type": "application/json"
  }
});



// const http = axios.create({
//   baseURL: process.env.REACT_APP_BASEURL, // Sử dụng biến môi trường
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default http;
