import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen6 = ({ props }) => {
    const { classes, setRoomMeasure, roomMeasure, handleNext } = props;

    return (
        <div className={classes.formScreen1}>
            <h1>Wat is de hoogte van de ruimte?</h1>

            <div className={classes.formScreenInput}>
                <input
                    type="number"
                    value={roomMeasure}
                    onChange={(e) => setRoomMeasure(+e.target.value === 0 ? e.target.value.replace(/^0+/, "") : +e.target.value)}
                    min={0}
                    placeholder="3.5 meter"
                />
                <IconButton onClick={handleNext} disabled={!roomMeasure}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen6;
