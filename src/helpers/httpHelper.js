import { getHeaders } from "../utility";

const basePath = {
  local: "http://localhost:5000",
};

export default function httpHelper(method, path = "local", endPoint, data, header) {
  const headers = header || getHeaders()
  const options = { method: method, headers };
  if (data) options.body = JSON.stringify(data);
  
  const url = basePath[path] + endPoint;
  return new Promise((resolve, reject) =>
    fetch(url, options)
      .then((text) => text.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );
}
