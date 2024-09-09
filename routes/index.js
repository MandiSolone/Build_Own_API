import express from "express";
import userRouter from "./user.routes"; 

//Express framework creates new router objects
//defines routes and handles request 
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter); 

export default router;
