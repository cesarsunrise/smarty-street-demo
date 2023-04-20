import express, { Router } from 'express';

import smarty from './smarty';

const api: Router = express.Router();

api.use('/smarty', smarty);

export default api;
