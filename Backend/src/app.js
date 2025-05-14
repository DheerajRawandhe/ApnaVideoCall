import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import {connectToSocket} from "./controllers/socketManager.js"
import userRoutes from "./routes/user.route.js" 

const app = express()
const port = 8000;

const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({limit : "40kb", extended: true}));


app.use("/api/v1/users", userRoutes);


app.get('/', (req, res) => {
  res.send('Hello Zoom Project!')
})

app.get('/home', (req, res) => {
  res.send({"hello" : "world"})
}) 

const start = async () => {
  app.set("mongo_user")
  const connectionDb = await mongoose.connect("mongodb+srv://dheerajrawandhe123:dheeraj06@cluster0.rsfsmqh.mongodb.net/")
  console.log(`Mongo Connected DB Host : ${connectionDb.connection.host}`)
}

server.listen(port , () => {
  console.log(`Server Started : http://localhost:${port}`)
})


start();
