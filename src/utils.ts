export const diminishingReturn = (level: number, rating: number, baseDivisor: number, exponentDivisor: number) => {
        const base = 1 - 0.01 / baseDivisor;
        const power = (rating / level) / exponentDivisor;

        return baseDivisor * (1 - Math.pow(base, power));
};

export const linear = (coefficient: number, rating: number) => coefficient * rating;
