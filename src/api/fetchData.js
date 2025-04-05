import axios from "axios";
import { useEffect, useState } from "react";

function FetchData(endPoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${endPoint}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endPoint]);

  return { data, loading };
}

export default FetchData;
