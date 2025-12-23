import Event from "../timeline/event";
import Timeline from "../timeline/timeline";

export default (id: string, tickRate: number, maxTick: number, tick: Event["trigger"], onStart?: Event["trigger"], onEnd?: Event["trigger"]) => {
    let currentTick = 0;

    const trigger = (timeline: Timeline) => {
        if (!currentTick) {
            timeline.addBuff(id);
            onStart?.(timeline);
        }

        ++currentTick;

        tick(timeline);

        if (currentTick < maxTick) {
            timeline.planEvent(trigger, tickRate);
        } else {
            timeline.removeBuff(id);
            onEnd?.(timeline);
        }
    };

    return trigger;
};
