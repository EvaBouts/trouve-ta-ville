import formatPopulation from "./formatPopulation.js";

describe('formatPopulation', () => {
    test('it should return the population number divided by 1_000_000, fixed to two with a coma instead of a dot + a final M', () => {
        // test 1
        const result1 = formatPopulation(12_345_678);
        const expectedResult1 = '12,35 M';
        expect(result1).toBe(expectedResult1);
        // test 2
        const result2 = formatPopulation(1_248_659);
        const expectedResult2 = '1,25 M';
        expect(result2).toBe(expectedResult2);

    });

    test('it should return the population number divided by 1_000, fixed to two with a coma instead of a dot + a final K', () => {
        // test 1
        const result1 = formatPopulation(1_234);
        const expectedResult1 = '1,23 K';
        expect(result1).toBe(expectedResult1);
        // test 2
        const result2 = formatPopulation(10_568);
        const expectedResult2 = '10,57 K';
        expect(result2).toBe(expectedResult2);

    });

    test('it should return the population number divided by 1_000, fixed to two with a coma instead of a dot + a final K', () => {
        // test 1
        const result1 = formatPopulation(60);
        const expectedResult1 = '60';
        expect(result1).toBe(expectedResult1);

        // test 2
        const result2 = formatPopulation(989);
        const expectedResult2 = '989';
        expect(result2).toBe(expectedResult2);
    });
});