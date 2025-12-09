import Player from "../player";
import Stat from "./stat";


export default class BonusDamage {
    private static MASTERY_COEFFICIENT = 0.2;
    private static POWER_COEFFICIENT = 0.23;

    private static fromMastery(player: Player): number {
        const {
            mastery,
            masteryIncrease,
        } = player;

        return mastery * (1 + masteryIncrease) * this.MASTERY_COEFFICIENT;
    }

    private static fromPower(player: Player): number {
        const {
            power,
            powerIncrease,
        } = player;

        return power * (1 + powerIncrease) * this.POWER_COEFFICIENT;
    }

    static calculate(player: Player): number {
        const {bonusDamageIncrease} = player;

        return (this.fromMastery(player) + this.fromPower(player)) * (1 + bonusDamageIncrease);
    }
}

BonusDamage satisfies Stat;
