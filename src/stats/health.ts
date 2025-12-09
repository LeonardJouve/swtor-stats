import Player from "../player";
import Stat from "./stat";

export default class Health {
    private static BASE_HEALTH = 23_750;

    static calculate(player: Player): number {
        const {
            endurance,
            enduranceIncrease,
            maxHealthIncrease,
        } = player;

        return (this.BASE_HEALTH + (endurance * 12 * (1 + enduranceIncrease))) * (1 + maxHealthIncrease);
    }
}

Health satisfies Stat;
