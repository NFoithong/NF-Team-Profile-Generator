const Engineer = require('../lib/engineer')

const engineer = new Engineer('Natt', 595, 'n.foithong1983@gmail.com', 'NFoithong');

// test engineer object
test('create a engineer object', () => {
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.emailAddress).toBe('n.foithong1983@gmail.com');
    expect(engineer.githubUsername).toBe('NFoithong');
})

// test getName()
test('test the getName() method', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});
// test getId()
test('test the getId() method', () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
});
// test getEmail() 
test('test the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('n.foithong1983@gmail.com');
});
// test getGithubUsername()
test('test the getOfficeNumber() method', () => {
    expect(engineer.getGithubUsername()).toBe('NFoithong');
});
// test getRole()
test('test the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});