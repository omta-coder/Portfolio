require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require('./Routes/router');
const port = 3000
require('./models/db');


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})