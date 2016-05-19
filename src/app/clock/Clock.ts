import './clock.scss';
import { Hand, SecondsHand, MinutesHand, HoursHand } from './Hand';

export class Clock {
    secondsHand: Hand;
    minutesHand: Hand;
    hoursHand: Hand;
    intervalId: number;

    constructor() {
        this.secondsHand = new SecondsHand(<HTMLElement>document.querySelector('.seconds-container'));
        this.minutesHand = new MinutesHand(<HTMLElement>document.querySelector('.minutes-container'));
        this.hoursHand = new HoursHand(<HTMLElement>document.querySelector('.hours-container'));
    }
    /** Starts ticking the clock */
    public start() {
        this.intervalId = window.setInterval(() => { this.update() }, 1000)
    }

    /** Stops the clock*/
    public stop() {
        window.clearInterval(this.intervalId);
    }

    /** Updates the clock hands */
    public update() {
        this.secondsHand.update();
        this.minutesHand.update();
        this.hoursHand.update();
    }

}