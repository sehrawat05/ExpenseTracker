import dotenv from 'dotenv';
dotenv.config();
import authRouter from "./routes/auth.routes.js";
import express from 'express';
import mongoose from 'mongoose';
import expenseRouter from "./routes/expense.routes.js";
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

const mongoDBURL = process.env.MONGODB_URL;

mongoose.connect(mongoDBURL)
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));

app.get('/', (req, res) => {
    res.send('Connected to MongoDB!');
});
app.use('/api/auth', authRouter);
app.use('/api/expense', expenseRouter);
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});