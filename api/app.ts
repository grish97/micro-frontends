import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as ProccessEvent from "./services/ProccessEvent";
import AppError from "./services/AppError";

ProccessEvent.unhandledRejection();
ProccessEvent.uncaughtRejection();

import envConfig from "./configs/envConfig";
import { errorHandler } from "./middleware/errorHandler";

// DB connection
import connectDb from "./db/db";

// connect to database
connectDb();

// routes
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import groupRoute from "./routes/group";
import messageRoute from "./routes/message";

// cors
import credentials from "./middleware/credentials";
import corsOptions from "./configs/corsOptions";

const app = express();

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/group", groupRoute);
app.use("/api/message", messageRoute);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log("Conected");
});
