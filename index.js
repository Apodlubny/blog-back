import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://Andy:feESIVX1Rlv1bEwx@cluster0.ics529r.mongodb.net/db-contacts?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();
//мідлвара для читання запросів з клієнта
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Works!");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  //генеруємо токен
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Ім'я користувача",
    },
    "secretKey"
  );
  res.json({ success: true, token });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server works!");
});
