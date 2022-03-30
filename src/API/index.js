import _ from 'lodash';
const REACT_APP_API_URL ='http://54.161.74.22:8000/api';// process.env.REACT_APP_API_URL;

export default (endPoint, method = "GET", data) => {
  
  if (method === "GET" && !_.isEmpty(data)) {

    Object.keys(data).forEach(key => {
      endPoint += `${key}=${data[key]}&`
    });
    endPoint = endPoint.substr(0, endPoint.length - 1);
    
  }

  return new Promise((resolve, reject) => {
    console.log(process.env.REACT_APP_API_URL);
    fetch(`${REACT_APP_API_URL}${endPoint}`, { method, ...(method !== 'GET' && { body: JSON.stringify(data), headers: { "Content-type": "application/json" } }) })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  });
}