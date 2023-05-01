import express from "express";

const app = express();
//мідлвара для читання запросів з клієнта
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Works!");
});

app.post("auth/login", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server works!");
});
