const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working  testing it 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));