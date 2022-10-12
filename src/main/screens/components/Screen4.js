import React from "react";
import { FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen4 = ({ props }) => {
    const { classes, setBusiness, business, handleNext } = props;

    const businessOptions = ["Kantoor", "Klaslokaal", "Binnen Sport", "Horeca/Club", "Restaurant"];

    const handleChange = (event) => {
        setBusiness(event.target.value);
    };

    return (
        <div className={classes.formScreen4}>
            <h1>Wat voor soort ruimte is het?</h1>
            {/* <h3>
                We Ask this in order to take into account in our formula whether this due to high effort many or few aeroles are produced in
                space
            </h3> */}
            <FormControl className={classes.formScreen4Group} component="fieldset">
                <RadioGroup
                    className={classes.formScreen4Radios}
                    aria-label="gender"
                    name="gender1"
                    value={business}
                    onChange={handleChange}
                >
                    {businessOptions.map((option, index) => (
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
            <IconButton style={{ margin: "20px auto" }} disabled={!business} className={classes.screen4Button} onClick={handleNext}>
                <img src={ArrowImg} alt="" />
            </IconButton>
        </div>
    );
};

export default Screen4;
