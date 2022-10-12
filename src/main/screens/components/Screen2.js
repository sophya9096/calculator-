import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen2 = ({ props }) => {
    const { classes, name, setName, handleNext } = props;

    return (
        <div className={classes.formScreen1}>
            {/* <h1>Let's Start with your first name</h1> */}
            <h1>Laten we beginnen bij je voornaam</h1>

            <div className={classes.formScreenInput}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Wat is je naam?" />
                <IconButton onClick={handleNext} disabled={!name}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen2;
