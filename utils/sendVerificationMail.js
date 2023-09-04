const { createMailTransporter } = require("./createMailTransporter");

const sendVerificationMail = (user) => {
    const transporter = createMailTransporter();

    const mailOptions = {
        from: '"Registration" <apav2086@gmail.com>',
        to: user.email,
        subject: "Verify your email...",
        html: `<p>Hello ${user.email}, verify your email by clicking this link...</p>
        <a href ='${process.env.CLIENT_URL}/verify?verificationToken=${user.verificationToken}'>Verify Your Email</a>`,

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Verification email sent");
        }
    });
};

module.exports = { sendVerificationMail };