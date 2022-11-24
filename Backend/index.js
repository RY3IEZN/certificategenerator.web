require('dotenv').config();
require("express-async-errors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require("dotenv");

const fileUpload = require('express-fileupload');

const app = express();

//import custom middleware
//const connectDB = require("./utils/dbConn");

//import custom routes
const auth = require("./routes/authRouter");
const csvRouter = require("./routes/csvRouter.js");
const blog = require("./routes/blogPostRouter");
const certificate = require("./routes/certificateRouter");
const downloadCsv = require("./routes/downloadRouter");
const careers = require("./routes/careerRouter");
const mailingLists = require("./routes/mailingListRouter");
const profileRouter = require("./routes/profileRouters");
const contacts = require('./routes/contactRouter');
const pricing = require('./routes/pricingRouter');
const teamRoute = require("./routes/teamRoute");
const swaggerUi = require('swagger-ui-express')
dotenv.config({ path: "./config.env" });
const swaggerFile = require('./swagger_output.json')
const router = require("./routes/teamRoute");

const PORT = process.env.PORT || 5000;

const DB = process.env.DATABASE;
mongoose.set("useCreateIndex", true);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("Connection successful");
  });

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Welcome to HNG-Certificate Api");
});

app.use("/api/auth", auth);
app.use("/api/upload/csv", csvRouter);
app.use("/api/blog", blog);
app.use("/api/certificates", certificate);
app.use("/api/download", downloadCsv);
app.use("/api/careers", careers);
app.use("/api/mailinglists", mailingLists);
app.use("/api/profile/",profileRouter);
app.use('/api/contactus',contacts)
app.use('/api/pricing', pricing)
app.use("/api/profile/", profileRouter);
app.use('/api/contactus', contacts)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/api/team", teamRoute);


app.listen(PORT, () => {
  console.log(`connected to backend - ${PORT}`);
});
