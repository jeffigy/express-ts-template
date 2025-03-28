import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status = res.statusCode || 500;
  let message = err.message;

  res.status(status).json({ message });
};

export default errorHandler;
