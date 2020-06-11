import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AppAPI from "./../AppAPI";

const AdminEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get(`/cars/${id}`);
      setLoading(false);
      return setData(data.data);
      // console.log("bzzb");
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    return await AppAPI.put(`/cars/${data.id}`, { ...data });
  };
  return (
    <form
      className="nickForm"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "0 auto",
        height: "350px",
        justifyContent: "space-between",
        padding: "25px",
      }}
      onSubmit={handleSaveChanges}
    >
      <legend style={{ fontSize: "20px" }}>Edditing Data</legend>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Name
        <input name="title" value={data.title || ""} onChange={handleChange} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Price
        <input name="price" value={data.price || ""} onChange={handleChange} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Text
        <input name="text" value={data.text || ""} onChange={handleChange} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Image URL
        <input
          name="imageUrl"
          value={data.imageUrl || ""}
          onChange={handleChange}
        />
      </div>
      <button>Save Changes</button>
    </form>
  );
};

export default AdminEdit;
