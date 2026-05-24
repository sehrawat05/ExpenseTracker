import dotenv from 'dotenv';
dotenv.config();
import authRouter from "./routes/auth.routes.js";
import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

const mongoDBURL = process.env.MONGODB_URL;

mongoose.connect(mongoDBURL)
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));

app.get('/', (req, res) => {
    res.send('Connected to MongoDB!');
});
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});