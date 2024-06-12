import express, { Request, Response } from 'express';
import * as path from 'path';
const app = express();
const port = 6005;

app.use(express.static('public'));

const VueApp = (res: Response) => res.sendFile(path.join(__dirname, '../public/vue-app/index.html'));
const ReactApp = (res: Response) => res.sendFile(path.join(__dirname, '../public/react-app/index.html'));

app.get(['/vue-app', '/vue-app/*'], (_req: Request, res: Response) => {
  return VueApp(res);
});

app.get(['/react-app', '/react-app/*'], (_req: Request, res: Response) => {
  return ReactApp(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
