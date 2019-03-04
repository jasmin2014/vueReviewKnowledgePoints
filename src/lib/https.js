import axios from "axios";

function createHttpInstance(baseURL) {
  const https = axios.create({
    baseURL: "/api/" + baseURL,
    timeout: 60000
  });

  https.interceptors.request.use(
    config => {
      console.log("config:", config);
      return config;
    },
    () => {
      return Promise.reject();
    }
  );

  https.interceptors.response.use(
    data => {
      console.log("data:", data);
      return data;
    },
    error => {
      const response = error.response;
      console.log("response:", response);
      return Promise.reject(response);
    }
  );
  return https;
}
export default {
  common: createHttpInstance("common/")
};
