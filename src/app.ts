import express, { Express, Request, Response } from 'express';
import './utils/dotenv';
import api from './routes/api';
import catchAllErrorHandler from './services/catchAllErrorHandler';

const app: Express = express();

app.use(
  express.json({
    limit: '50mb',
  })
);
app.use(
  express.text({
    limit: '50mb',
  })
);

app.get('/health', (req: Request, res: Response) => {
  res.send('ok');
});

app.use('/api', api);

app.use(catchAllErrorHandler);

export default app;
