import { TimerObservable } from 'rxjs/observable/TimerObservable';

export class LiveMemoTimer {
    timer;

    constructor() {
        this.timer = TimerObservable.create(0, 5000);
    }
}
