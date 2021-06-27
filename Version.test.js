const { Version } = require('./Version');

describe('Should have compared versions', () => {
    test.each([
        ['1.0.0', '1.0.0'],
        ['0.1.0', '0.1.0'],
        ['0.0.1', '0.0.1'],
        ['1.1.1', '1.1.1'],
        ['1.1.1.1', '1.1.1.1'],
    ])('that are equal', (version1, version2) => {
        const result = new Version(version1).compareTo(new Version(version2));
        expect(result).toBe(0);
    });

    test.each(['2.0.0', '1.1.0', '1.0.1', '1.0.0.0'])('where the first is greater', version1 => {
        const result = new Version(version1).compareTo(new Version('1.0.0'));
        expect(result).toBe(1);
    });

    test.each(['2.0.0', '1.1.0', '1.0.1', '1.0.0.0'])('where the second is greater', version2 => {
        const result = new Version('1.0.0').compareTo(new Version(version2));
        expect(result).toBe(-1);
    });

    test.each([
        ['0.1', '1.1'],
        ['1.1', '1.2'],
        ['1.2', '1.2.9.9.9.9'],
        ['1.2.9.9.9.9', '1.3'],
        ['1.3', '1.3.4'],
        ['1.3.4', '1.10'],
    ])('where the second is greater than the given first', (version1, version2) => {
        const result = new Version(version1).compareTo(new Version(version2));
        expect(result).toBe(-1);
    });
});
