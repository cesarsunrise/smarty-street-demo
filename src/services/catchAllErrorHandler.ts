/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const catchAllErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    if (err.isJoi) {
      res.status(422).json({
        message: 'Validation error',
        errors: err.details.map((item: { message: string; type: string }) => ({
          message: item.message.replaceAll(`\"`, `'`),
        })),
      });
      return;
    }
    const statusCode = err.status || 500;
    res.status(statusCode).json({
      statusCode,
      message: err.message || 'Internal Server Error',
    });
  }
};

export default catchAllErrorHandler;
