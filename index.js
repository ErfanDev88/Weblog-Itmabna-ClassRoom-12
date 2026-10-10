import e from "express";
import config from "config";

const app = e();
const port = config.get("port");

app.listen(port, () => console.log(`app running on port ${port}`));
