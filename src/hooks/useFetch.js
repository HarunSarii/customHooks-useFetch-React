import { useState, useEffect } from "react";
import { getData } from "../functions/functions";

export const useFetch = (url, intVal) => {
  const [response, setResponse] = useState(intVal);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(url)
      .then((response) => {
        console.log(response);
        setResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { response, loading, error };
};
