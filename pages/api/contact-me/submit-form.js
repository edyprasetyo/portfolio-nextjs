
import db from "../../../lib/db";
import Tools from "../../../lib/tools";

export default async function handler(req, res) {

    function sendEmailNotification(subject, emailTo, body) {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USER,
                clientId: process.env.EMAIL_CLIENT_ID,
                clientSecret: process.env.EMAIL_CLIENT_SECRET,
                refreshToken: process.env.EMAIL_REFRESH_TOKEN,
                accessToken: process.env.EMAIL_ACCESS_TOKEN,
            }
        })

        const mailData = {
            from: 'zlatanptasetyo@gmail.com',
            to: emailTo,
            subject: subject,
            html: body
        }
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.log(err)
                return false;
            }
            else {
                console.log(info)
                return true;
            }

        })
    }

    const body = req.body
    console.log(body);
    const oMessage = await db.message.create({
        data: {
            Email: body.Email,
            Message: body.Message,
            WaktuInput: Tools.datetimeNow()
        },
    });

    sendEmailNotification('PORTFOLIO MESSAGE', 'edyprasetyo151093@gmail.com'
        , `<div style="font-size:1.5rem;">${body.Message}</div><p  style="font-size:1rem;">Sent from:
    ${body.Email}</p>`
    )
    res.status(200).json({ 'success': true });
}


