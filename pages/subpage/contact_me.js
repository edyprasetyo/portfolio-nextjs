
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Tools from "../../lib/tools";
import Loading from "../layout/preloader";

function ContactMe() {

    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();

    const [canSubmit, setCanSubmit] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const recaptchaRef = useRef(null);

    const onSubmit = data => {
        if (data.Message == 'tes') {
            setError("Message", { message: "please input valid message" });
            return;
        }

        setIsLoading(true);
        fetch('/api/contact-me/submit-form', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                if (data.success) {
                    Tools.showSuccess('Thank you for your message, i will respond as soon as possible');
                    recaptchaRef.current.reset();
                    reset()
                    setCanSubmit(true);
                }
            });
    };


    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        const captcha = recaptchaRef.current.getValue();
        fetch('/api/contact-me/check-token', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'captcha': captcha }),
        }).then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setCanSubmit(false);
                } else {
                    Tools.showError('Captcha not valid');
                }
            });
    }

    return (<>
        <Loading isLoading={isLoading}></Loading>
        <div id="contact-me">
            <div style={{ height: 80 }}></div>
            <div className="container">
                <div className="h1 text-green">
                    <strong id="worksSince">#Contact Me</strong>
                </div>
                <div className="row mt-5 px-3">
                    <div className="col-lg-6 col-12 text-center">
                        <img className="img-fluid img-email-me" src="/images/email_me.svg" />
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <label className="form-label text-white">Your Email</label>
                                    <input {...register("Email", { required: true, maxLength: 200 })}
                                        type="email" className={"form-control " + (errors.Email && "is-invalid")} />
                                    {Tools.errorValidation(errors.Email)}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12 col-sm-12">
                                    <label className="form-label text-white">Message</label>
                                    <textarea {...register("Message", { required: true, maxLength: 200 })}
                                        rows={3} className={"form-control " + (errors.Message && "is-invalid")} ></textarea>
                                    {Tools.errorValidation(errors.Message)}
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        size="normal"
                                        sitekey="6LcvLQwfAAAAACtJXD-yVvb0MkdGzxTpkP6qB2zI"
                                        onChange={onReCAPTCHAChange}
                                    />
                                    <div className="mt-3">
                                        <button type="submit" className="button" disabled={canSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </div >
    </>

    );
}

export default ContactMe;


