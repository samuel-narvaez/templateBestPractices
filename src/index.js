const express = require('express');
const v1Router = require("./v1/routes");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//routes
v1Router(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log(`🚀 Server listening on port ${PORT}`) });