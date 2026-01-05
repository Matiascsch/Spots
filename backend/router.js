import { Router } from "express";
import usersRouter from "./users/userRoutes.js";

const router = Router();

router.use("/users", usersRouter);

export default router;
