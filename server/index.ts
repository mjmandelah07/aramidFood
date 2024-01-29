const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// import files
const initializeDatabase = require("./models/initialize-db");
import foodRoutes from "./routes/foodRoutes";

const app = express();
// create a port to listen on
const port = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
//Enabled cors
app.use(cors());

app.get("/", (req: any, res: any) => {
  res.send("Welcome to aramidFood");
});

// connect to database and create schemas
initializeDatabase;

// Routes
app.use("/api/v1/food", foodRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
