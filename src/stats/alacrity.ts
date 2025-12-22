import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class Alacrity {
    static calculate({alacrity, level}: Player): number {
        return diminishingReturn(level, alacrity, 0.3, 3.2);
    }
}

Alacrity satisfies Stat;
