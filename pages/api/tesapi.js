import moment from "moment";
import Tools from "../../lib/tools";


export default async function handler(req, res) {
    // Encrypt
    var ciphertext = Tools.protect('edy.prasetyo|' + moment().format('YYYYMMDDHHmmss'));

    // Decrypt
    var text = Tools.unProtect(ciphertext);

    res.status(200).json({ text, ciphertext });
}
