const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.',
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error sending email: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
    