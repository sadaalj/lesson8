const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(appOperations.multiply(5, 0)).toBe(0);
});
test("adding two valeus", () => {
    expect(appOperations.add(5, 5)).toBe(10);
});