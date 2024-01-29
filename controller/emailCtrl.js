const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MP,
        }
    });

    let info = await transporter.sendMail({})
    from: '"gura-online" "<gura-online@gmail.com>"';
    to: data.to;
    subject: data.subject
})