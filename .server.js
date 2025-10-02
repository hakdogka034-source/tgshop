import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from tgshop bot!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
