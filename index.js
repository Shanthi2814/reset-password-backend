require("dotenv").config()
const express = require("express");
const connectDb = require("./config/db")
const cors = require("cors");
const dotenv = require('dotenv')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const passwordReset = require("./routes/passwordReset");
const  mongoose  = require("mongoose");



//To connect DB
dotenv.config()
connectDb();
const port = process.env.PORT || 3000;

const app = express();
// const port = process.env.PORT ;
// const db = process.env.DB;



app.use(express.json());
app.use(cors());

//Adding the custom middleware
app.use("/user", userRoute);
app.use("/authroute", authRoute);
app.use("/password", passwordReset);

// mongoose.connect(db,{
//     useNewUrlParser: true,
//       // useFindAndModify: false,
//       useUnifiedTopology: true,
//       // useCreateIndex: true,
// });

app.get("/",(req,res)=>{
    res.send("Welcome to Password-Reset application")
})

//Initializing the port number


app.listen(port,()=>{
    console.log(`Application is running on PORT ${port}`);
})