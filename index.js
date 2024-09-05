const express= require("express");
const dotenv= require("dotenv");
const cookieParser= require("cookie-parser");
const userRoutes=require("./routers/user-router.js")
const taskRoutes=require("./routers/task-router.js");
const feedbackRoutes=require("./routers/feedback-router.js");
const performanceRoutes= require("./routers/performance-router.js");
const connectDB= require("./db.js");
connectDB();
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/user",userRoutes);
app.use("/task",taskRoutes);
app.use("/feedback",feedbackRoutes);
app.use("/performance",performanceRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
})

