// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: Number(process.env.MAIL_PORT),
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS
//     }

//     const mailOptions = {
//         from: options.from,
//         to: options.to,
//         subject: options.subject,
//         text: options.text,
//         html: options.html
//     }

//     transporter.sendEmail(mailOptions)
// });

// export default transporter;
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    await transporter.sendMail(options);
};

export default sendEmail;