require("dotenv").config();

const server = require("./Books/api/server");

const port = process.env.PORT || 5050;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
