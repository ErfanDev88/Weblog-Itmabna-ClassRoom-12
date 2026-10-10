import e from "express";
import config from "config";
import ConnectToDb from "./src/start/db.js";

const app = e();
const port = config.get("port");


ConnectToDb()

app.listen(port, () => console.log(`app running on port ${port}`));
