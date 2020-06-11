import React, { useEffect, useState } from "react";
import AppAPI from "./../AppAPI";
import { useParams } from "react-router";
import Loading from "./../components/Loading";

const Car = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get(`/cars/${id}`);
      await setData(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        width: "90%",
        margin: "50px auto 0 auto",
        backgroundColor: "lightgray",
        padding: "50px",
        boxSizing: "border-box",
        boxShadow: "0 0 20px white",
        borderRadius: "4px",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={data.imageUrl}
            alt=""
            style={{ borderRadius: "15px", overflow: "hidden" }}
          />
          <hgroup
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "44px",
                color: "white",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              {data.title}
            </h2>
            <h5
              style={{ fontSize: "24px", color: "white", lineHeight: "40px" }}
            >
              {data.text}
            </h5>
          </hgroup>
        </div>
      )}
    </div>
  );
};

export default Car;
