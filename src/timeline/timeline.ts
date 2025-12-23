import Player from "../player";
import affliction from "../spells/inquisitor/affliction";
import Event from "./event";

export default class Timeline {
    public timestamp: number;
    private events: Event[];
    private buffs: Set<string>;
    private talents: Set<string>;
    public player: Player;

    constructor(player: Player) {
        this.timestamp = 0;
        this.events = [];
        this.buffs = new Set();
        this.talents = new Set();
        this.player = player;

        this.planGCD();
        this.planEvent(affliction, 0);
    }

    addBuff(buff: string) {
        this.buffs.add(buff);
    }

    removeBuff(buff: string) {
        this.buffs.delete(buff);
    }

    hasBuff(buff: string) {
        return this.buffs.has(buff);
    }

    addTalent(talent: string) {
        this.talents.add(talent);
    }

    removeTalent(talent: string) {
        this.talents.delete(talent);
    }

    hasTalent(talent: string) {
        return this.talents.has(talent);
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
