import {
  TimerObservable
} from 'rxjs/observable/TimerObservable';
import {
  Router,
  Request,
  Response
} from 'express';
import {
  LiveMemoTimer
} from './live-memo-timer';

import {
  Note
} from '../database/models';

export class LiveMemoController {

  response;

  constructor(public livememos: LiveMemoTimer = new LiveMemoTimer(), public instance: Router = Router()) {
    this.init();

  }
  init() {
    this.instance.get('', this.sseSetup);
  }
  sseSetup = (req: Request, res: Response, next) => {
    this.response = res;
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    

    const liveMemosSubscribtion = this.livememos.timer.subscribe(tick => {
      //not emitting notes the whole time.
      if(tick>20) {
        this.response.close();
        liveMemosSubscribtion.unsubscribe();
      }

      if (this.response) {
        this.sseSend(JSON.stringify({
          guid: Math.random().toString().substr(3,12),
          title: 'Todo #' + tick,
          description: 'Description ' + tick,
          todos: []
        }));
      }
    });

    req.on('close', () => {
      liveMemosSubscribtion.unsubscribe();
    });
  }

  sseSend = (data) => {
    this.response.write('data: ' + JSON.stringify(data) + '\n\n');
  }

}
