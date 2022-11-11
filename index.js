const express = require("express"); // package express
const cors = require("cors"); // package cors
const mongoose = require("mongoose"); // package mongoose

const app = express(); // constante app utilisant express
app.use(cors());
app.use(express.json()); // utilisation format JSON

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI); // DB Vinted

const signupRoutes = require("./Routes/signup"); // raccourci signup
const loginRoutes = require("./Routes/login"); // raccourci login
const publishRoutes = require("./Routes/publish"); // raccourci publish

app.use(signupRoutes);
app.use(loginRoutes);
app.use(publishRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is now online /!\\");
});