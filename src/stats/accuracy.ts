import Player from "../player";
import Stat from "./stat";

export default class Accuracy {
    static calculate(player: Player): number {
        const {
            accuracy,
            level,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (accuracy / level) / 1;

        return 30 * (1 - Math.pow(base, power));
    }
}

Accuracy satisfies Stat;
