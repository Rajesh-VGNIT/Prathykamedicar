const express = require("express");

const app = express();
const User = require("./db/User.js");
require("./db/config.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  const result = await user.save();
  if(result){
    resp.send(result);
  }else{
    resp.send({result:"something missing"})
  }
});

app.listen(5003, () => {
  console.log("port is running at 5003");
});
