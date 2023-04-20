import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

const validate =
  (schema: Schema, options = {}, location = 'body') =>
  (req: Request, res: Response, next: NextFunction) => {
    let payload;
    if (location === 'body') {
      payload = req.body;
    } else if (location === 'params') {
      payload = req.params;
    } else {
      payload = req.query;
    }
    const { error } = schema.validate(payload, options);
    if (error) {
      throw error;
    }
    next();
  };

export default validate;
