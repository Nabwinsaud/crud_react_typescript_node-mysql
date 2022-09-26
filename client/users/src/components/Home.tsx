import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Navbar from "./Navbar";
import Update from "./Update";
import Users from "./Users";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Users />} path="" />
        <Route element={<Add />} path="/add" />
        <Route element={<Update />} path="/update/:id" />
      </Routes>
    </div>
  );
};

export default Home;
