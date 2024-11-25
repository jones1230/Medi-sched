import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
import Staff from '../models/HospitalStaff.js';
import Token from '../models/tokens.js';
import sendmail from '../utils/mailer.js';
import message from '../utils/emailMessage.js';

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Staff.findOne({ email });
        if(!user) return res.status(404).json({ success: false, msg: `User with email ${email} does not exist` });
        let token = await Token.findOne( {user_id: user._id} ); // Edit this line when you implement deletion of token after successful use
        if (token == null) {
            token = new Token({
                user_id: user.id,
                token: crypto.randomBytes(32).toString('hex'),
            })
            await token.save();
        }
        const resetLink = `${process.env.BASE_URL}/${user.id}/${token.token}`
        sendmail(email,
            'Password reset',
            message(user.name, email, resetLink))
            .catch(console.error);
        res.status(200).json({ success: true, msg:` Password reset link sent to  ${email}`});
    } catch (error) {
        res.status(500).send('An error occured');
        console.error;
    }
}


export const resetPassword = async (req, res) => {
    try {
        const { userId, token } = req.params;
        const { newPassword } = req.body;
        const user = await Staff.findById(userId);
        if(user === undefined) {
            res.status(401).json({success: false, msg: 'No user exist for this link'});
        }
        res.status(200).send(user);
    } catch (error) {
        console.error;
        res.end;
    }
}
