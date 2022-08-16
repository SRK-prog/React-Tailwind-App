import { CONTENT_TYPE } from "../constants";

const uid = () => Math.random().toString(16).slice(2) + Date.now();

const getHeaders = (type = "JSON", token) => {
  const headers = { "Content-Type": CONTENT_TYPE[type] };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

export { uid, getHeaders };
