import { IconButton, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen11 = ({ props }) => {
    const {
        classes,
        handleNext,
        setAirCleaner,
        airCleaner,
        ventilationRate,
        specificStandard,
        setSpecificStandardReplica,
        specificStandardReplica,
        setSpecificStandardReplica2,
    } = props;

    const [purifier, setPurifier] = useState("");

    const airPurifiers = [
        "PlasmaMade €4000",
        "Cyclo Tower €4850",
        "Blue Air Pro XL €2500",
        "IQair €1,099",
        "TROTEC TACV €3695",
        "Blue Air Pro LSM €1389",
        "MONARCH “Monarch Clean air =1,548.76",
        "TSM Pro EAS1300 UV-C =€3695",
    ];

    const handleSet = (value) => {
        if (value === "PlasmaMade €4000") {
            setAirCleaner(1.2);
        }
        if (value === "Cyclo Tower €4850") {
            setAirCleaner(1.5);
        }
        if (value === "Blue Air Pro XL €2500") {
            setAirCleaner(1.36);
        }
        if (value === "Blue Air Pro LSM €1389") {
            setAirCleaner(1.36);
        }
        if (value === "IQair €1,099") {
            setAirCleaner(0.35);
        }
        if (value === "TROTEC TACV €3695") {
            setAirCleaner(1.2);
        }
        if (value === "MONARCH “Monarch Clean air =1,548.76") {
            setAirCleaner(1.32);
        }
        if (value === "TSM Pro EAS1300 UV-C =€3695") {
            setAirCleaner(1.3);
        }

        setSpecificStandardReplica({
            boubesluit: specificStandard.boubesluit - ventilationRate,
            recommended: specificStandard.recommended - ventilationRate,
            netherlands: specificStandard.netherlands - ventilationRate,
            covid_advises: specificStandard.covid_advises - ventilationRate,
            maximum_safety: specificStandard.maximum_safety - ventilationRate,
        });

        setPurifier(value);
    };

    const handleCalculate = () => {
        setSpecificStandardReplica2({
            boubesluit: specificStandardReplica.boubesluit / airCleaner,
            recommended: specificStandardReplica.recommended / airCleaner,
            netherlands: specificStandardReplica.netherlands / airCleaner,
            covid_advises: specificStandardReplica.covid_advises / airCleaner,
            maximum_safety: specificStandardReplica.maximum_safety / airCleaner,
        });
        handleNext();
    };

    return (
        <div className={classes.formScreen10}>
            <h1>Select your air cleaner</h1>
            <div className={classes.formScreenInput}>
                {/* <input
                    type="password"
                    value={ventilationPassword}
                    onChange={(e) => setVentilationPassword(e.target.value)}
                    min={0}
                    placeholder="....."
                /> */}
                <Autocomplete
                    id="combo-box-demo"
                    value={purifier}
                    onChange={(e, value) => handleSet(value)}
                    options={airPurifiers}
                    getOptionLabel={(option) => option}
                    getOptionSelected={(option) => option}
                    style={{ padding: "15px 10px", flex: 1 }}
                    renderInput={(params) => <TextField {...params} placeholder="Select your air cleaner" />}
                />
                <IconButton onClick={handleCalculate} disabled={!purifier}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen11;
