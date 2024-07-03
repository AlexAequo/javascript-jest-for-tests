const validateEmail = require('./validateEmail');

describe('Email validation', () => {
  test('should return "Email is valid" for a valid email', () => {
    const result = validateEmail('test@example.com');
    expect(result.message).toBe('Email is valid');
    expect(result.color).toBe('green');
  });

  test('should return "Email is invalid" for an invalid email', () => {
    const result = validateEmail('invalid-email');
    expect(result.message).toBe('Email is invalid');
    expect(result.color).toBe('red');
  });
});
