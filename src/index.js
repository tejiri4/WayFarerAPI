import express from 'express';
import cors from 'cors';
import consola from 'consola';
import session from 'express-session';
import response from 'utils/response';
import messages from 'utils/messages';
import errorHandler from 'utils/errorHandler';
import dotenv from 'dotenv';

// app
const app = express();

// configure dotenv
dotenv.config();

// port
const port = process.env.PORT || '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// express session
app.use(session({
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

app.get('/', (req, res) => response(res, 200, 'success', {
  message: messages.welcome,
}));

app.use((req, res) => response(res, 404, 'failure', {
  message: messages.notFound('Route'),
}));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  consola.success(`server start at port ${port}`);
});

export default app;
