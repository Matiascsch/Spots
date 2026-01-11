import { Router } from "express";

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.send("Posts route works");
});

export default postsRouter;
