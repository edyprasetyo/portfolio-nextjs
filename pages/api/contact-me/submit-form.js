
import db from "../../../lib/db";
import Tools from "../../../lib/tools";

export default async function handler(req, res) {
    const body = req.body
    console.log(body);
    const oMessage = await db.message.create({
        data: {
            Email: body.Email,
            Message: body.Message,
            WaktuInput: Tools.datetimeNow()
        },
    });

    Tools.sendEmailNotification('PORTFOLIO MESSAGE', 'edyprasetyo151093@gmail.com'
        , `<div style="font-size:1.5rem;">${body.Message}</div><p  style="font-size:1rem;">Sent from:
    ${body.Email}</p>`
    )
    res.status(200).json({ 'success': true });
}
