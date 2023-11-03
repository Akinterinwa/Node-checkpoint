const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
    },
});

// Email data
const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
