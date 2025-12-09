import Player from "../player";
import Alacrity from "./alactrity";
import Stat from "./stat";

export default class GCD {
    private static BASE_GCD = 1.5;

    static calculate(player: Player): number {
        const alacrity = Alacrity.calculate(player);
        const gcd = 100 * this.BASE_GCD / (alacrity + 100);

        return Math.ceil(gcd * 10) / 10;
    }
}

GCD satisfies Stat;
