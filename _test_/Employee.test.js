const { expect } = require('@jest/globals')
const Employee = require('../lib/employee')

const employee = new Employee('Natt', 595, 'n.foithong1983@gmail.com')

// test employee object
test('test a employee object', () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.emailAddress).toBe('n.foithong1983@gmail.com');
});

// test getName()
test('test the getName() method', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});
// test getId()
test('test the getId() method', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});
// test getEmail() 
test('test the getEmail() method', () => {
    expect(employee.getEmail()).toBe('n.foithong1983@gmail.com');
});
// test getRole()
test('test the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});