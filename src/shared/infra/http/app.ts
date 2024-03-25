import 'dotenv/config';
import cors from 'cors';
import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import 'express-async-errors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

export { app };
