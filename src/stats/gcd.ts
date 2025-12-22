import Player from "../player";
import Alacrity from "./alacrity";
import Stat from "./stat";

export default class GCD {
    private static BASE_GCD = 1.5;

    static calculate(player: Player): number {
        const alacrity = Alacrity.calculate(player);
        const gcd = this.BASE_GCD / (alacrity + 1);

        return Math.ceil(gcd * 10) / 10;
    }
}

GCD satisfies Stat;
