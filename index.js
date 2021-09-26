import express from "express";
import { errorLogger, errorResponder, invalidPathHandler } from "./middleware";
import routes from "./routes";

const app = express();
const port = 8001;

app.use(routes);

// middleware
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
