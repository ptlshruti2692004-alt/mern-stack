import express from "express";
import { 
  create, 
  deleteUser, 
  getAllUsers, 
  getUserById,
  update,
} from "../controller/userController.js";

const router = express.Router();

router.post("/users", create);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", update);
router.delete("/users/:id", deleteUser);  

export default router;




