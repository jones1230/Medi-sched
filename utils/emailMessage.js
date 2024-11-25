export default function message (username, email, resetlink) {
    const msg = `Dear ${ username },\n\n
We received a request to reset the password for your account. If you did not make this request, please ignore this email.\n
To reset your password, click on the link below:\n
Reset Your Password\n
This link will expire in 1 hour for security reasons.\n
If you're having trouble with the link, you can copy and paste the following URL into your browser:\n
${ resetlink }\n\n
For your securit
This link can only be used once.\n
If you didn't request a password reset, no changes will be made to your account.
If you have any questions or concerns, please contact our support team at contactmedisched@gmail.com.\n
Best regards,\n
The Medi-Sched Team.\n\n
This email was sent to ${ email }. If you believe this was sent in error, please contact us immediately.`
    return msg;
}
