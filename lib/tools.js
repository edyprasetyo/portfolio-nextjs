import moment from "moment";
import nodemailer from 'nodemailer';
import React from "react";
import Swal from "sweetalert2";
import Toastify from "toastify-js";


export default class Tools {

    static datetimeNow() {
        return moment().toDate();
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

    static sendEmailNotification(subject, emailTo, body) {
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

}

