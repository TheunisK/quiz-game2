require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan')

const app = express();
app.disable('x-powered-by');

if (process.env.NODE_ENV !== 'development') {
	app.use(express.static(path.resolve(__dirname, '../../build')));
}

const userRouter = require('./routers/user');
// const quizRouter = require('./routers/quiz');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/user', userRouter);
// app.use('/quiz', quizRouter);

app.get('*', (req, res) => {
    res.json({ ok: true });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});