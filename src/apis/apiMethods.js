import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
    // you can also do other modification in config
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getData = async (url) => {
  const data = await axiosInstance({
    method: "GET",
    url,
  });
  return data.data;
};

export const postData = async (url, reqBody) => {
  const data = await axiosInstance({
    method: "POST",
    url,
    data: reqBody,
  });
  return data.data;
};

export const patchData = async (url, reqBody) => {
  const data = await axiosInstance({
    method: "PATCH",
    url,
    data: reqBody,
  });
  return data.data;
};

export const deleteData = async (url, reqBody) => {
  const data = await axiosInstance({
    method: "DELETE",
    url,
    data: reqBody,
  });
  return data.data;
};
