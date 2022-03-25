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
    res.status(200).json({ 'success': true });
}
