const Manager = require("../lib/Manager");

test("Get office number of manager by constructor", () => {
    const test = 100;
    const manager = new Manager("Billy", 1, "billy@gmail.com", test);
    expect(manager.officeNumber).toBe(test);
});

test("Get office number of manager by getOfficeNumber()", () => {
    const test = 100;
    const manager = new Manager("Billy", 1, "billy@gmail.com", test);
    expect(manager.getOfficeNumber()).toBe(test);
});

test("Get role of manager by getRole()", () => {
    const test = "Manager";
    const manager = new Manager("Billy", 1, "billy@gmail.com", 100);
    expect(manager.getRole()).toBe(test);
});