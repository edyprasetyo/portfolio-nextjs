
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

function ContactMe() {

    const [canSubmit, setCanSubmit] = useState(true);
    const recaptchaRef = useRef(null);

    async function submitForm(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        toast('testing');
        fetch('/api/contact-me/submitform', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': data.get('email'), 'message': data.get('message'), }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    function showData() {
        const captchaToken = recaptchaRef.current.getValue();
        console.log(captchaToken);
    }

    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        const captcha = recaptchaRef.current.getValue();
        fetch('/api/contact-me/checktoken', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'captcha': captcha }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        // recaptchaRef.current.reset();
        setCanSubmit(false);
    }

    return (
        <div id="contact-me">
            <div style={{ height: 60 }}></div>
            <div className="container">
                <div className="h1 text-green">
                    <strong id="worksSince">#Contact Me</strong>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        <img className="img-fluid" src="/images/email_me.svg" />
                    </div>
                    <div className="col-lg-6 col-12">
                        <Form onSubmit={submitForm}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-white">Message</Form.Label>
                                <Form.Control name="message" as="textarea" rows={3} />
                            </Form.Group>

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="normal"
                                sitekey="6LcvLQwfAAAAACtJXD-yVvb0MkdGzxTpkP6qB2zI"
                                onChange={onReCAPTCHAChange}
                            />
                            <div className="mt-3">
                                <Button type={"submit"} className="button" disabled={canSubmit}>Submit</Button>
                            </div>


                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;