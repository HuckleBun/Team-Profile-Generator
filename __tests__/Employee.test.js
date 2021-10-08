const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const test = 100;
  const employee = new Employee("Foo", test);
  expect(employee.id).toBe(test);
});

test("Can set email via constructor argument", () => {
  const test = "test@test.com";
  const employee = new Employee("Foo", 1, test);
  expect(employee.email).toBe(test);
});

test("Can get name via getName()", () => {
  const test = "Alice";
  const employee = new Employee(test);
  expect(employee.getName()).toBe(test);
});

test("Can get id via getId()", () => {
  const test = 100;
  const employee = new Employee("Foo", test);
  expect(employee.getId()).toBe(test);
});

test("Can get email via getEmail()", () => {
  const test = "test@test.com";
  const employee = new Employee("Foo", 1, test);
  expect(employee.getEmail()).toBe(test);
});

test("getRole() should return \"Employee\"", () => {
  const test = "Employee";
  const employee = new Employee("Alice", 1, "test@test.com");
  expect(employee.getRole()).toBe(test);
});
