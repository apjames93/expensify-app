const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    let result = add(3, 4);
    expect(result).toBe(7);
});

test('Should say Hello', () => {
    let result = generateGreeting('Alex');
    expect(result).toBe(`Hello Alex`);
});

test('Should say Hello to Anonymoun', () => {
    let result = generateGreeting();
    expect(result).toBe(`Hello Anonymous`);
});