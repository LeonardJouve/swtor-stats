import Player from "../player";
import Alacrity from "./alacrity";
import Stat from "./stat";

export default class CastTime {
    static calculate(player: Player): number {
        const alacrity = Alacrity.calculate(player);

        return 1 / (1 + alacrity * 100);
    }
}

CastTime satisfies Stat;
