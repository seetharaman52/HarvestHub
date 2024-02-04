export const validateSignUp = (username, phoneNumber, email, password) => {
    if (!username.trim()) {
      return 'Please enter a valid user name.';
    }
  
    if (!(phoneNumber.trim() !== '' && !isNaN(phoneNumber) && phoneNumber.length > 9)) {
      return 'Please enter a valid phone number.';
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address.';
    }
  
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };
  