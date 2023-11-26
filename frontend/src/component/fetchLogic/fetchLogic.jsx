import React, { useEffect, useState } from "react";

export const UploadLogic = ({ jsonData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/uploadFile", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data;
};