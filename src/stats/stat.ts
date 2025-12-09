import Player from "../player";

export default interface Stat {
    calculate(player: Player): number;
}
