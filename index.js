const http = require("http");
const { PORT } = require("./utils/config");
const app = require("./app");

http.createServer(app);

app.listen(PORT);
