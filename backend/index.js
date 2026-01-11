import express from "express";
import { PORT } from "./config/config.js";
import router from "./router.js";

// inicialización de la aplicación Express
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
