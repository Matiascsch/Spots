import { Router } from "express";
import UserHandlers from "./userHandlers.ts";

const usersRouter = Router();

usersRouter.get("/", UserHandlers.getUsers);

export default usersRouter;
