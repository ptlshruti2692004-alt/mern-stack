import express from "express";
import { create, getAllUsers, getUserById, update } from "../controller/userController.js";

const route = express.Router();

route.post("/users", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getUserById);
route.put("/users/:id", update);   

export default route;


