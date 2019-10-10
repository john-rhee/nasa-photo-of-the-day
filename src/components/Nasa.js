import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList() {
    const [data, setData] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=9UgiGDpKnSx2hPf2iEbdbugRgKa8KWY4E6a9RfHG`)
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

return (
    <div>
        <NasaCard 
        key={data.date}
        title={data.title}
        photo={data.url}
        />
    </div>
  );
}