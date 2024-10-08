import { useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (urlComplement) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(urlComplement);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    data,
    isLoading,
  };
};