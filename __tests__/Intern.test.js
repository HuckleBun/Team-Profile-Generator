const Intern = require("../lib/Intern");

test("Get school of intern by constructor", () => {
    const test = "KU";
    const intern = new Intern("Billy", 1, "billy@gmail.com", test);
    expect(intern.school).toBe(test);
});

test("Get github of intern by getSchool()", () => {
    const test = "hucklebun";
    const intern = new Intern("Billy", 1, "billy@gmail.com", test);
    expect(intern.getSchool()).toBe(test);
});

test("Get role of intern by getRole()", () => {
    const test = "Intern";
    const intern = new Intern("Billy", 1, "billy@gmail.com", "KU");
    expect(intern.getRole()).toBe(test);
});