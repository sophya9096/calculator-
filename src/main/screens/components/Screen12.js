import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";
// import emailjs from "emailjs-com";

const Screen11 = ({ props }) => {
    const {
        classes,
        handleNext,
        setEmail,
        email,
        // name,
        // m2Space,
        // people,
        // people1,
        // people2,
        // standard,
        // roomMeasure,
        // m3Rate,
        // ACH_Formula,
        // airCleaner,
        // specificStandard,
        // CADR,
    } = props;

    function sendEmail(e) {
        e.preventDefault();

        // const emailPayload = {
        //     m2Space,
        //     roomMeasure,
        //     m3Rate,
        //     people1,
        //     ACH: ACH_Formula(m3Rate).toFixed(1),
        //     standardText: standard?.text,
        //     standardDm3: standard?.dm3,
        //     airCleanerTitle: airCleaner?.title,
        //     CADR,
        //     Calculated_ACH: ACH_Formula(CADR).toFixed(1),
        //     people2,
        //     allPeople: people1 + people2,
        //     people,
        //     boubesluit: specificStandard?.boubesluit,
        //     recommended: specificStandard?.recommended,
        //     netherlands: specificStandard?.netherlands,
        //     covid_advises: specificStandard?.netherlands,
        //     email,
        //     name,
        // };

        // emailjs.send("service_1xuvm5d", "template_pkb9xk7", emailPayload, "user_3mpdZRyu4dYkVL4hBP0mo").then(
        //     (result) => {
        //         console.log(result.text);
        //     },
        //     (error) => {
        //         console.log(error.text);
        //     },
        // );
        handleNext();
    }

    return (
        <div className={classes.formScreen10}>
            <h1>Laatste stap</h1>
            <form onSubmit={sendEmail} className={classes.formScreenInput}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Wat is je email?" />
                <IconButton type="submit" disabled={!email}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </form>
        </div>
    );
};

export default Screen11;
