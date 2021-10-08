const Engineer = require("../lib/Engineer");

test("Get github of engineer by constructor", () => {
    const test = "hucklebun";
    const engineer = new Engineer("Billy", 1, "billy@gmail.com", test);
    expect(engineer.github).toBe(test);
});

test("Get github of engineer by getGithub()", () => {
    const test = "hucklebun";
    const engineer = new Engineer("Billy", 1, "billy@gmail.com", test);
    expect(engineer.getGithub()).toBe(test);
});

test("Get role of engineer by getRole()", () => {
    const test = "Engineer";
    const engineer = new Engineer("Billy", 1, "billy@gmail.com");
    expect(engineer.getRole()).toBe(test);
});