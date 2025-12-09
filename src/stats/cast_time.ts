import Player from "../player";
import Alacrity from "./alactrity";
import Stat from "./stat";

export default class CastTime {
    static calculate(player: Player): number {
        const alacrity = Alacrity.calculate(player);

        return 1 / (1 + alacrity);
    }
}

CastTime satisfies Stat;
