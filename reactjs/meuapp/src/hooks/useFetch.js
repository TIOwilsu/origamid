import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (method, options = "") => {
    let json;
    try {
      setError(null);
      setLoading(true);
      json = await method(options);
    } catch (err) {
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
