const Staff = require('../models/HospitalStaff');
require('dotenv').config();
const nodemailer = require('nodemailer');

const forgotpassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Staff.find({ email });
        if(!user) return res.status(404).json({ success: false, msg: `User with email ${email} does not exist` });
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'contactmedisched@gmail.com',
                pass: process.env.APP_PASSWORD
            }
        });

        async function main() {
            const info = await transport.sendMail({
                from: '"Medi Sched Support"<contactmedisched@gmail.com>',
                to: 'jesseyeboah14@gmail.com',
                subject: 'Test email',
                text: 'It works',
            });
            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ success: true, msg: info.response });
        }

        main().catch(console.error);

    } catch (error) {
        console.error;
    }
}

module.exports = forgotpassword;