const head = require('./head');

describe('Head', () => {

    it('array has more than zero elements', () => {
        expect(head([1,2,3,4,5])).toEqual(1);
    });

    it('array has no elements', () => {
        expect(head([])).toEqual(undefined);
    });

})