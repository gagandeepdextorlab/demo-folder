import { Router } from "express";
import { getAllUsers, createUser , loginUser, getUserById , updateUser, deleteUser } from "../controller/userController.js";

const router = Router();


router.get("/api/users/:email", getUserById);
router.post("/api/users", createUser);
router.put("/api/users/:email", updateUser);
router.get("/api/users", getAllUsers);
router.post("/api/users/login", loginUser);
router.delete("/api/users/:email", deleteUser)

export default router;