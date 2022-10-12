import React from "react";
import { Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import OptionsImg from "../../../assets/images/options.png";

const Screen9 = ({ props }) => {
    const { classes, standard, setStandard, handleNext } = props;

    const standardOptions = [
        "Norm Boubesluit uit 2005",
        "Recommended ASHRAE",
        "Netherlands (Areins et AI..)",
        "COVID-19 Advises",
        "Maximum Safety",
    ];

    return (
        <div className={classes.formScreen1}>
            <h1>Which standard do you want to add here to</h1>

            <FormControl className={classes.formScreen8Group} component="fieldset">
                <RadioGroup
                    className={classes.formScreen4Radios}
                    aria-label="gender"
                    name="gender1"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                >
                    {standardOptions.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            className={classes.formScreen4Radio}
                            value={option}
                            control={<Radio style={{ color: "rgb(93 183 254)", margin: "0 40px" }} />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <div className={classes.formScreen8Footer}>
                <Button className={classes.formScreen8Btn} endIcon={<img src={OptionsImg} alt="" />}>
                    MORE info
                </Button>
                <IconButton className={classes.screen4Button} onClick={() => handleNext()}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen9;
