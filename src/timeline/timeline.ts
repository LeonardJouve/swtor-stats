import Player from "../player";
import Event from "./event";

export default class Timeline {
    public timestamp: number;
    private events: Event[];
    public player: Player;

    constructor(player: Player) {
        this.timestamp = 0;
        this.events = [];

        this.player = player;

        this.planGCD();
    }

    nextEvent() {
        const event = this.events.shift();
        if (!event) {
            return;
        }

        this.timestamp = event.timestamp;
        event.trigger(this);
    }

    planEvent(trigger: Event["trigger"], after: number) {
        let index = this.events.findIndex((event) => event.timestamp > this.timestamp + after);
        if (index === -1) {
            index = this.events.length;
        }

        this.events.splice(index, 0, {
            timestamp: this.timestamp + after,
            trigger,
        });
    }

    planGCD() {
        const trigger = (timeline: Timeline) => {
            console.log("gcd", timeline.timestamp);
            timeline.planEvent(trigger, timeline.player.gcd.value);
        };

        this.planEvent(trigger, this.player.gcd.value);
    }
}
