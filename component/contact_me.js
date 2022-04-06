
import React, { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Tools from "../lib/tools";
import { checkCapthaToken, contactMeData, setSubmitDisabled, submitContactForm } from "../reducers/contactMe/contactMeSlice";
import Loading from "./layout/preloader";

function ContactMe() {
    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();

    const dispatch = useDispatch()
    const oContactMeData = useSelector(contactMeData);

    const recaptchaRef = useRef(null);

    const onSubmit = data => {
        if (data.Message == 'tes') {
            setError("Message", { message: "please input valid message" });
            return;
        }
        dispatch(submitContactForm(data));
    };

    useEffect(() => {
        if (oContactMeData.resSubmit.success) {
            dispatch(setSubmitDisabled(true))
            Tools.showSuccess('Thank you for your message, i will respond as soon as possible');
            recaptchaRef.current.reset();
            reset()
        }
    }, [oContactMeData.resSubmit]);

    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        const captcha = recaptchaRef.current.getValue();
        dispatch(checkCapthaToken(captcha));
    }

    useEffect(() => {
        if (oContactMeData.resToken.success) {
            dispatch(setSubmitDisabled(false))
        } else {
            dispatch(setSubmitDisabled(true))
        }
    }, [oContactMeData.resToken]);

    return (<>
        <Loading isLoading={oContactMeData.loading}></Loading>
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
                                        <button type="submit" className="button" disabled={oContactMeData.submitDisabled}>Submit</button>
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


