import express, { Router, Request, Response } from 'express';
import { IAddress } from '../../../core/data/IAddress';
import SmartyController from '../../../controllers/SmartyController';
import validate from '../../../middleware/validation';
import { addressSchema } from '../../../validations/schemas';

const smarty: Router = express.Router();

smarty.post(
  '/international',
  validate(addressSchema, {
    abortEarly: false,
  }),
  async (req: Request, res: Response) => {
    const data: IAddress = req.body;

    const controller = new SmartyController();
    const { body, status } = await controller.internationalFormat(data);
    res.status(status).json(body);
  }
);

smarty.post(
  '/usa',
  validate(addressSchema, {
    abortEarly: false,
  }),
  async (req: Request, res: Response) => {
    const data: IAddress = req.body;

    const controller = new SmartyController();
    const { body, status } = await controller.usFormat(data);
    res.status(status).json(body);
  }
);

export default smarty;
