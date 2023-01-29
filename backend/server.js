const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const apiRoutes = require("./routes/apiRoutes");
const connectDB = require("./config/db");
app.use(express.json());

app.get("/", async (req, res, next) => {
  res.json({ message: "API Running" });
});

// mongo db connection

connectDB();

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message, stack: error.stack });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
