const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const connectDB = require("./backend/config/db");
const cors = require("cors");

const PORT = process.env.PORT;

// Connect to database

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World, Welcome to support desk API",
  });
});

//Routes
app.use("/api/users", require("./backend/routes/userRoutes"));
app.use("/api/tickets", require("./backend/routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
