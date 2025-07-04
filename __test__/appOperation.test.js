const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(appOperations.multiply(5, 0)).toBe(0);
});
test("adding two valeus", () => {
    expect(appOperations.add(5, 5)).toBe(10);
});
test("subtracting two values", () => {
    expect(appOperations.subtract(10, 5)).toBe(5);
});
test("dividing two values", () => {
    expect(appOperations.divide(10, 2)).toBe(5);
});