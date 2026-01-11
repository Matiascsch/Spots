import { Router } from "express";

import AuthHandlers from "./authHandlers.js";

const authRouter = Router();

authRouter.post("/generartoken", AuthHandlers.generarToken);
authRouter.get("/login", AuthHandlers.login);
authRouter.post("/register", AuthHandlers.register);

export default authRouter;
