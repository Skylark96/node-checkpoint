const generatePassword = require('generate-password');

const generateSuperRandomPassword = () => {
    const password = generatePassword.generate();
    console.log('Generated Password:', password);
};

generateSuperRandomPassword();