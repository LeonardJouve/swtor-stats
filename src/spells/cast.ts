import Event from "../timeline/event";
import Timeline from "../timeline/timeline";

export default (cast: number, trigger: Event["trigger"]) => {
    return (timeline: Timeline) => {
        timeline.planEvent(trigger, cast);
    };
};
