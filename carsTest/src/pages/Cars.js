import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppAPI from "./../AppAPI";
import Loading from "./../components/Loading";

const Cars = () => {
  const [gela, setData] = useState([]);
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get("/cars");
      await setData(data.data.sort((a, b) => b - a));
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(loading);
  return (
    <div id="container">
      <div id="prod_wrapper" style={{ minHeight: "400px" }}>
        <div id="prod_nav">
          <h2
            style={{
              fontSize: "44px",
              color: "black",
              marginTop: "30px",
              marginBottom: "10px",
            }}
          >
            {" "}
            Gallery
          </h2>
          {loading ? (
            <Loading />
          ) : (
            <ul>
              {gela &&
                gela.map((car) => (
                  <li key={car.id} style={{ marginBottom: "50px" }}>
                    {" "}
                    <Link to={`/gallery/car/${car.id}`}>
                      <img src={car.imageUrl} width="160" alt="" />
                      <strong>{car.title}</strong> {car.price}
                    </Link>
                  </li>
                ))}
              <div style={{ clear: "both" }}></div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cars;
