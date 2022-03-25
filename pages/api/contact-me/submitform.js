import db from "../../../lib/db";

export default async function handler(req, res) {
    const body = req.body
    console.log('tes');
    console.log(body);
    const oMessage = await db.message.create({
        data: {
            Email: body.email,
            Message: body.message,
        },
    });
    res.status(200).json({ 'success': true });
}
