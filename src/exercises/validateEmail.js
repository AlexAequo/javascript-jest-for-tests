function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      return { message: 'Email is valid', color: 'green' };
    } else {
      return { message: 'Email is invalid', color: 'red' };
    }
  }
  
  module.exports = validateEmail;
  