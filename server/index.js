import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoutes from "./routes/posts.js";
const app = express();

app.use(bodyParser.json({limit:"30mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true}));
app.use(cors());
app.use('/posts',postsRoutes);

const PORT = process.env.PORT || 5000

// connect my db
const mongodb_url = 'mongodb+srv://geeks:geeks@noor.dqjmz.mongodb.net/noor?retryWrites=true&w=majority';
mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
mongoose.set('useFindAndModify', false);


