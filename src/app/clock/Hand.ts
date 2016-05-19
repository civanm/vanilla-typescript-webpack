class Hand {
    public date: Date = new Date()
    private _angle: number;

    constructor(public _container: HTMLElement) {
        this._angle = 0;
    }

    public update(date: Date = new Date()): void {
        this.date = date;
        this._container.style.transform = `rotate(${this.geAngle()}deg)`;
    }

    geAngle(): number {
        return this.getValue() * this.getAngleDistance();
    }

    getAngleDistance(): number {
        return (360 / 60);
    }

    getValue(): number {
        return this.date.getSeconds();
    }

}

class SecondsHand extends Hand {
    getValue(): number {
        return this.date.getSeconds();
    }
}

class MinutesHand extends Hand {
    getValue(): number {
        return this.date.getMinutes();
    }
}

class HoursHand extends Hand {
    getValue(): number {
        return this.date.getHours();
    }
    getAngleDistance(): number {
        return (360 / 12);
    }
}

export {
    Hand,
    SecondsHand,
    MinutesHand,
    HoursHand
}