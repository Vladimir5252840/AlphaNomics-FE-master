import React, { useEffect, useRef, useState } from 'react';
import API from '../API';
import { uuid } from 'uuidv4';

const useFetch = ({ endPoint, method = "GET", data: customData = {} }) => {
  const [data, setData] = useState(null);
  console.log("data-----",data);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [networkLoading, setNetworkLoading] = useState(false);
  const [lastRequestId, setLastRequestId] = useState(uuid());

  const getData = () => {
    setNetworkLoading(true);
    API(endPoint, method, customData)
      .then((result) => setData(result))
      .catch((err) => setErrors(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          setNetworkLoading(false);
        }, 10);
      });
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, [])

  const refetch = () => getData();

  return { data, errors, loading, refetch, networkLoading, setLoading };

}
export default useFetch;