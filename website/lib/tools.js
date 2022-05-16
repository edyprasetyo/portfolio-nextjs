import { AES, enc } from "crypto-js";
import moment from "moment";
import React from "react";
import Swal from "sweetalert2";
import Toastify from "toastify-js";


export default class Tools {

    static protect(text) {
        text = moment().format('HHmmss') + text;
        var ciphertext = AES.encrypt(text, process.env.DATABASE_URL).toString();
        ciphertext = ciphertext
            .replace('+', '-')
            .replace('/', '_')
            .replace('=', '');
        return ciphertext;
    }

    static unProtect(ciphertext) {
        if (ciphertext.length % 4 == 2) {
            ciphertext += '==';
        } else if (ciphertext.length % 4 == 3) {
            ciphertext += '=';
        }
        ciphertext = ciphertext
            .replace('-', '+')
            .replace('_', '/');

        var bytes = AES.decrypt(ciphertext, process.env.DATABASE_URL);
        var originalText = bytes.toString(enc.Utf8);
        originalText = originalText.substring(6);
        return originalText;
    }

    static datetimeNow() {
        return moment().add(7, 'hours').toDate();
    }

    static formDataToJson(formData) {
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        return data;
    }

    static errorValidation(errors) {
        if (errors?.type === 'required') {
            return <div className="invalid-feedback">
                field is required
            </div>;
        }
        if (errors?.type === 'maxLength') {
            return <div className="invalid-feedback">
                max length 200 characters
            </div>;
        }
        return errors && <div className="invalid-feedback">
            {errors.message}
        </div>;
    }

    static showInfoDialog(text) {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: '<span style:"font-size:1rem;">' + text + '</span>',
            showConfirmButton: true,
        })
    }

    static showSuccess(text) {
        Toastify({
            text: text,
            duration: 10000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    static showError(text) {
        Toastify({
            text: text,
            duration: 10000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(255,98,98,1) 0%, rgba(228,41,41,1) 100%)",
            }
        }).showToast();
    }



}

