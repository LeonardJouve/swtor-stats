import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class Accuracy {
    static calculate({level, accuracy}: Player): number {
        return diminishingReturn(level, accuracy, 0.3, 3.2);
    }
}

Accuracy satisfies Stat;
