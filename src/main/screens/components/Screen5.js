import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen5 = ({ props }) => {
    const { classes, m2Space, setM2Space, handleNext } = props;

    return (
        <div className={classes.formScreen1}>
            <h1>Hoeveel m2 is de ruimte?</h1>

            <div className={classes.formScreenInput}>
                <input
                    type="number"
                    value={m2Space}
                    onChange={(e) => setM2Space(+e.target.value === 0 ? e.target.value.replace(/^0+/, "") : +e.target.value)}
                    min={0}
                    placeholder="150m2 square"
                />
                <IconButton onClick={handleNext} disabled={!m2Space}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen5;
