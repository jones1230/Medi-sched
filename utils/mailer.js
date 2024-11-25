import { createTransport } from 'nodemailer';

const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_USER_PASSWORD
    }
});

export default async function main(email, subject, text) {
    const info = await transport.sendMail({
        from: '"Medi Sched Support"<contactmedisched@gmail.com>',
        to: email,
        subject,
        text
    });
    console.log("Message sent: %s", info.messageId);
}
