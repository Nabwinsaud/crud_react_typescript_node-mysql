import { useState, useEffect } from "react";
import "./users.css";
import axios from "axios";
import { Link } from "react-router-dom";

interface IUsers {
  userId: number;
  userName: string;
  email: string;
}
const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000");
      const data = res.data;
      setUsers(data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      window.location.reload();
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="users">
      <h3 className="userTitle">Lists of users</h3>
      <section className="usersSection">
        {users.map((user) => {
          return (
            <div className="userProfile" key={user?.userId}>
              <div className="card">
                <h1>{user?.userName}</h1>
                <p>{user?.email}</p>
                <div className="buttons">
                  <button
                    className="btn deleteUser"
                    onClick={() => handleDelete(user.userId)}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${user.userId}`}>
                    <button className="btn updateUser">update</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Users;
