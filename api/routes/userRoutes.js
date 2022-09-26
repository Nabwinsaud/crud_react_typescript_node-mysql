import express from "express";
const router = express.Router();
import {
  getAllUsers,
  insertUsers,
  updateUsers,
  deleteUsers,
} from "../controller/userController.js";

router.get("/", getAllUsers);
router.post("/users", insertUsers);
router.put("/users/:userId", updateUsers);
router.delete("/users/:userId", deleteUsers);
export default router;
