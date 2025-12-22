import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class Shield {
    static calculate({shield, shieldIncrease, level}: Player): number {
        return diminishingReturn(level, shield, 0.5, 2.079) + shieldIncrease;
    }
}

Shield satisfies Stat;
