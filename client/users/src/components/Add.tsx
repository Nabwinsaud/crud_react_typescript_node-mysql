import React, { useRef, useState } from "react";
// import backendApi from "../axios/request";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./add.css";
interface IUsers {
  username: string;
  email: string;
}
const Add = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUsers>({
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const formRef: React.LegacyRef<HTMLFormElement> | undefined =
    useRef<null>(null);
  const handleChange = (e: any) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: any) => {
    const { username, email } = users;
    e.preventDefault();
    try {
      if (username != "" && email != "") {
        setLoading(true);
        await axios.post("http://localhost:8000/users", users);
        console.log("user data added successfully ✅");
        setLoading(false);
        navigate("/");
        formRef.current?.reset();
      } else {
        alert("all fields are required");
      }
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="add">
      <section className="section">
        <div className="">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="inputs">
              <label htmlFor="userName">username</label>
              <input
                type="text"
                name="userName"
                placeholder="usernmae"
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                onChange={handleChange}
              />
            </div>
            {loading ? (
              <button
                className="addButton"
                style={{ cursor: "not-allowed" }}
                disabled={loading}
                type="submit"
              >
                submitting...
              </button>
            ) : (
              <button className="addButton" type="submit">
                submit
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Add;
