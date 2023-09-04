const nodemailer = require("nodemailer");

const createMailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'apav2086@gmail.com',
            pass: process.env.EMAIL_PASS,
        },
    });
    return transporter;
};

module.exports = { createMailTransporter };