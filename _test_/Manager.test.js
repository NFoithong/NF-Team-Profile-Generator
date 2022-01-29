const Manager = require('../lib/manager')

const manager = new Manager('Natt', 595, 'n.foithong1983@gmail.com', 7033977359)

// test manager object
test('create a manager object', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.emailAddress).toBe('n.foithong1983@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

// test getName()
test('test the getName() method', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});
// test getId()
test('test the getId() method', () => {
    expect(manager.getId()).toEqual(expect.any(Number));
});
// test getEmail() 
test('test the getEmail() method', () => {
    expect(manager.getEmail()).toBe('n.foithong1983@gmail.com');
});
// test getOfficeNumber()
test('test the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
// test getRole()
test('test the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});