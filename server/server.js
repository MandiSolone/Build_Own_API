import express from express; 
import config from "../config"; //checks if import is correct 
import apiRouter from "../routes";
import morgan from morgan; 

const app = express();

//Middlewear that parses incoming request data to JSON
//Attaches JSON to body parameter of the request object 
app.use(express.json());

//use the imported apiRouter to handle all requests
app.use("/api", apiRouter);

//http request logger middleware for Node.js used with Express.js to log url, resp, req
app.use(morgan("common"));  

//Default Error Handler 
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
