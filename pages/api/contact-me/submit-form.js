
import db from "../../../lib/db";
import Tools from "../../../lib/tools";

export default async function handler(req, res) {

    function sendEmailNotification(subject, emailTo, body) {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
            secure: true,
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


