import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./update.css";
import axios from "axios";
interface IUpdate {
  userName: string;
  email: string;
}
const Update = () => {
  const [update, setUpdate] = useState<IUpdate>({
    userName: "",
    email: "",
  });
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);

  const userId = location.pathname.split("/")[2];

  const handleChange = (e: any) => {
    setUpdate((prevUsers) => ({
      ...prevUsers,
      [e.target.name]: e.target.value,
    }));
  };

  const { userName, email } = update;
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (userName !== "" && email !== "") {
        await axios.put(`http://localhost:8000/users/${userId}`, update);
        // window.location.reload();
        navigate("/");
      } else {
        alert("empty cannot be updated add some fields");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <div className="update">
      <section className="updateSection">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                type="text"
                name="userName"
                placeholder="usernmae"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                onChange={handleChange}
              />
            </div>
            <button className="updateButton" type="submit">
              update
            </button>
            <div className="back">
              <Link to="/" className="backLink">
                back
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
