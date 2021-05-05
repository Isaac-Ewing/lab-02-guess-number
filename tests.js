import { compareNumbers } from './functions.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = 1;
    const actual = compareNumbers(20, 10);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 0;
    const actual = compareNumbers(10, 10);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = -1;
    const actual = compareNumbers(0, 10);
    expect.equal(actual, expected);
});