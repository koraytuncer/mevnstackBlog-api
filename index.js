import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import connectDb from "./db/dbConnection.js";
const app = express();

//.env configuration
dotenv.config();

app.use(express.json())

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Db Connect Function
connectDb();

//Route 
app.use(`${process.env.APP_PREFIX}`, router.pageRoute);
app.use(`${process.env.APP_PREFIX}`, router.categoriesRoute);
app.use(`${process.env.APP_PREFIX}`, router.userRoute);
app.use(`${process.env.APP_PREFIX}`, router.postRoute);


const port = process.env.APP_PORT || 5050;
app.listen(process.env.APP_PORT, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`);
});
