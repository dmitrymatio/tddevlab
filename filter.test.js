const filter = require('./filter');

describe('Filter function', () => {
    test('it should filter by search term', () => {
        const input = [
            { id: 1, url: "https://url1" },
            { id: 1, url: "https://url2" },
            { id: 1, url: "https://link3" }
        ];

        const output = [{ id: 1, url: "https://link3" }]
        expect(filter(input, 'link')).toEqual(output);
        expect(filter(input, 'LINK')).toEqual(output);

    });

    test('it should filter by search term', () => {
        const input = [
            { id: 1, url: "https://url1" },
            { id: 1, url: "https://url2" },
            { id: 1, url: "https://link3" }
        ];

        const output = [{ id: 1, url: "https://url1" },
            { id: 1, url: "https://url2" }
        ]
        expect(filter(input, 'url')).toEqual(output);
        expect(filter(input, 'URL')).toEqual(output);

    });

    test('err if empty', () => {
        const input = [
            { id: 1, url: "https://url1" },
            { id: 1, url: "https://url2" },
            { id: 1, url: "https://link3" }
        ];

        expect(() => {
            filter(input, '')
        }).toThrowError(Error('Search term cant be empty'));

    });
})