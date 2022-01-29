const Intern = require('../lib/intern')

const intern = new Intern('Natt', 595, 'n.foithong1983@gmail.com', 'school')

// test intern object
test('create a intern object', () => {
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.emailAddress).toBe('n.foithong1983@gmail.com');
    expect(intern.school).toEqual(expect.any(String));
})

// test getName()
test('test the getName() method', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});
// test getId()
test('test the getId() method', () => {
    expect(intern.getId()).toEqual(expect.any(Number));
});
// test getEmail() 
test('test the getEmail() method', () => {
    expect(intern.getEmail()).toBe('n.foithong1983@gmail.com');
});
// test getGithubUsername()
test('test the getSchool() method', () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
});
// test getRole()
test('test the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});