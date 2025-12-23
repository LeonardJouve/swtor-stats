import Timeline from "./timeline";

export default interface Event {
    timestamp: number;
    trigger(timeline: Timeline): void;
}
