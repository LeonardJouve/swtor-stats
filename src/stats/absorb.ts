import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class Absorb {
    static calculate({absorb, level}: Player): number {
        return diminishingReturn(level, absorb, 0.5, 2.189);
    }
}

Absorb satisfies Stat;
