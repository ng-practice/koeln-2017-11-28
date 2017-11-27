import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import { MemosController } from './memos/controller';
import { AuthController } from './auth/controller';
import {AuthorizationMiddleware} from './middelwares/authorization';
import { LiveMemoController } from './liveMemos/controller';





  const authMiddleware = new AuthorizationMiddleware();
  const memosController = new MemosController();
  const events = new LiveMemoController();
  const app = express();
  const port = 4280;


  app.use(cors());
  app.use('/events', events.sseSetup);
  //app.use(authMiddleware.instance);
  app.use('/auth', AuthController);

  app.use(bodyParser.json());
  app.use('/', memosController.instance);



  app.listen(port, () => {
  console.log(`API runs at http://localhost:${port}`);

  }
);

