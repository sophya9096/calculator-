import React from "react";
import { Button, IconButton, Slider, withStyles } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import OptionsImg from "../../../assets/images/options.png";

const Screen10 = ({ props }) => {
    const { classes, handleNext, ventilationRate, setVentilationRate } = props;

    const PrettoSlider = withStyles({
        root: {
            // color: "#52af77",
            color: "dodgerblue",
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            marginTop: -8,
            marginLeft: -12,
            "&:focus, &:hover, &$active": {
                boxShadow: "inherit",
            },
        },
        active: {},
        valueLabel: {
            left: "calc(-50% + 4px)",
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
    })(Slider);

    return (
        <div className={classes.formScreen10}>
            <h1>What is your current ventilation rate?</h1>
            <div className={classes.ventilationBar}>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    min={0}
                    step={0.1}
                    max={10}
                    value={ventilationRate}
                    onChange={(e, value) => setVentilationRate(value)}
                />
            </div>
            <div className={classes.formScreen10Counts}>
                <h2>0</h2>
                <h2>10</h2>
            </div>
            <div className={classes.tag}>
                <p>{ventilationRate} ACH</p>
            </div>
            <div className={classes.formScreen8Footer}>
                <Button className={classes.formScreen8Btn} endIcon={<img src={OptionsImg} alt="" />}>
                    MORE info
                </Button>
                <IconButton className={classes.screen4Button} onClick={handleNext}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen10;
