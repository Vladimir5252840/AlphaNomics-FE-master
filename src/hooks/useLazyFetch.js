import React, { useState } from 'react';
import API from '../API';

const useLazyFetch = ({ endPoint, method = "GET", data: customData = {} }) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const refetch = () => {
    setLoading(true)
    API(endPoint, method, customData)
      .then((result) => setData(result))
      .catch((err) => setErrors(err))
      .finally(() => setLoading(false));
  }

  return [refetch, { data, errors, loading, refetch }];

}
export default useLazyFetch;