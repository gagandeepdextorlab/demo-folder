import { Router } from "express";
import { getAllUsers, registerUser, loginUser, getUserById , updateUser, deleteUser } from "../controller/userController.js";

const router = Router();


router.get("/api/users", getAllUsers);
router.post("/api/users", registerUser);
router.get("/api/users/:email", getUserById);
router.put("/api/users/:email", updateUser);
router.delete("/api/users/:email", deleteUser)
router.post("/api/users/login", loginUser);

export default router;