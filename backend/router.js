import { Router } from "express";

// Middlewares
// import { authMiddleware } from "../middlewares/authMiddleware.js";

// Routes
import usersRouter from "./users/userRoutes.js";
import postsRouter from "./posts/postRoutes.js";
import authRouter from "./auth/authRoutes.js";

const router = Router();

// router.use(authMiddleware); // Apply authentication middleware to all routes

// Declaracion de routes
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);

export default router;
