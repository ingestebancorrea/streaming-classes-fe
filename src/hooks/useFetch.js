import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;