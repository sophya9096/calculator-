import { Button, Dialog, IconButton, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import ArrowBackImg from "../../../assets/images/arrowBack.png";

import OptionsImg from "../../../assets/images/options.png";

const Screen8 = ({ props }) => {
    const {
        classes,
        ventilationMandatory,
        ventilationTitle,
        handleNext,
        setVentilationMandatory,
        setVentilationTitle,
        standards,
        roomMeasure,
        setSpecificStandard,
        setStandardValue,
    } = props;

    const [open, setOpen] = useState(false);

    const handleCalculation = (value) => {
        let standardValue;
        if (value === safety_options[0] || value === safety_options[1] || value === safety_options[4] || value === safety_options[5]) {
            setStandardValue(1.0);
            standardValue = 1.0;
        }

        if (value === safety_options[2] || value === safety_options[3] || value === safety_options[7]) {
            setStandardValue(0.8);
            standardValue = 0.8;
        }
        if (value === safety_options[6]) {
            setStandardValue(0.7);
            standardValue = 0.7;
        }
        if (value === safety_options[8]) {
            standardValue(0.5);
            standardValue = 0.5;
        }

        setSpecificStandard({
            boubesluit: (standards.boubesluit / roomMeasure) * standardValue,
            recommended: (standards.recommended / roomMeasure) * standardValue,
            netherlands: (standards.netherlands / roomMeasure) * standardValue,
            covid_advises: (standards.covid_advises / roomMeasure) * standardValue,
            maximum_safety: (standards.maximum_safety / roomMeasure) * standardValue,
        });

        setVentilationTitle(value);
    };

    const moreInfo = (
        <Dialog maxWidth={"lg"} fullWidth={true} open={open} onClose={() => setOpen(false)}>
            <div className={classes.moreInfoDialog}>
                <div className={classes.moreInfoDialogSection}>
                    <h1>Well-mixed Air Distribution Systems</h1>
                    <p>1. Plafond toevoer van koele lucht</p>
                    <p>2. Plafondtoevoer warme lucht en vloerretour</p>
                    <p>3. Plafondtoevoer van warme lucht (8 ° C) of meer boven ruimtetemperatuur en plafondretour</p>
                    <p>
                        4. Plafondtoevoer van warme lucht minder dan 8 ° C boven de gemiddelde ruimtetemperatuur waarbij de snelheid van de
                        toevoerluchtstraal 0,8 minder is dan 0,8 m / s binnen 1,4 m van de vloer en plafondretour
                    </p>
                    <p>
                        5. Plafondtoevoer van warme lucht minder dan 8 ° C boven de gemiddelde ruimtetemperatuur waarbij de
                        toevoerluchtstraal 1,0 snelheid gelijk is aan of groter is dan 0,8 m / s binnen 1,4 m van de vloer en plafondretour
                    </p>
                    <p>6.Vloertoevoer van warme lucht en vloer retour</p>
                    <p>7.Vloertoevoer van warme lucht en plafond retour</p>
                    <p>
                        8. Uitlaat voor make-uptoevoer die zich meer dan de helft van de ruimte van de uitlaat, de retour of beide bevindt
                    </p>
                    <p>
                        9. Uitlaat voor make-uptoevoer bevindt zich op minder dan de helft van de ruimte vanaf de uitlaat, retour of beide
                    </p>
                    <div className={classes.shortDiv}>
                        <h3>
                            <a
                                style={{ color: "#000", textAlign: "left" }}
                                target="_blank"
                                rel="noreferrer"
                                href="http://www.urbanphysics.net/Preprint_COVID19_Tools.pdf"
                            >
                                * source: http://www.urbanphysics.net/Preprint_COVID19_Tools.pdf{" "}
                            </a>
                        </h3>
                    </div>
                    <Button
                        style={{ margin: "auto" }}
                        startIcon={<img src={ArrowBackImg} alt="" />}
                        className={classes.screen4Button}
                        onClick={() => setOpen(false)}
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        </Dialog>
    );

    return (
        <div className={classes.formScreen4}>
            <h1>
                Kies je ventilatie veiligheidsniveau
                <br />
                <span style={{ fontWeight: 400 }}>“Effectieve Air Distribution Systems”</span>
                <br />
                op het gebied van in en uitvoer van de ventilatie
            </h1>
            <div className={classes.formScreenInput}>
                {/* <input
                    type="password"
                    value={ventilationPassword}
                    onChange={(e) => setVentilationPassword(e.target.value)}
                    min={0}
                    placeholder="....."
                /> */}
                <Autocomplete
                    value={ventilationTitle}
                    onChange={(e, title) => handleCalculation(title)}
                    id="combo-box-demo"
                    options={safety_options}
                    getOptionLabel={(option) => option}
                    getOptionSelected={(option) => option}
                    style={{ padding: "15px 10px", flex: 1 }}
                    renderInput={(params) => <TextField {...params} placeholder="" />}
                />
                <IconButton onClick={handleNext} disabled={!ventilationTitle}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
            <div className={classes.formScreenInput}>
                <input
                    type="text"
                    value={ventilationMandatory}
                    onChange={(e) => setVentilationMandatory(e.target.value)}
                    min={0}
                    disabled
                    placeholder="Huidige ventilatie systeem (niet verplicht)"
                />
                {/* <IconButton onClick={handleNext} disabled={!roomMeasure}>
                    <img src={ArrowImg} alt="" />
                </IconButton> */}
            </div>
            <div className={classes.formScreenInput}>
                <input
                    disabled={true}
                    type="text"
                    // value={roomMeasure}
                    // onChange={(e) => setRoomMeasure(e.target.value)}
                    min={0}
                    placeholder="Klik hier als je geen ventilatie hebt"
                />
                <IconButton onClick={() => handleNext()}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
            {/* <div className={classes.formScreen8Footer}>
                <Button className={classes.formScreen9Btn} endIcon={<img src={OptionsImg} alt="" />}>
                    MORE info
                </Button>
            </div> */}
            <div style={{ width: "68%" }} className={classes.formScreen8Footer}>
                <IconButton disabled={!ventilationTitle} className={classes.screen4Button} onClick={handleNext}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
                <Button
                    onClick={() => setOpen(true)}
                    style={{ width: "150px", height: "50px" }}
                    className={classes.formScreen8Btn}
                    endIcon={<img src={OptionsImg} alt="" />}
                >
                    Uitleg nodig ?
                </Button>
            </div>
            {moreInfo}
        </div>
    );
};

export default Screen8;

const safety_options = [
    "Plafond toevoer van koele lucht",
    "Plafondtoevoer warme lucht en vloerretour",
    "Plafondtoevoer van warme lucht (8 ° C) of meer boven ruimtetemperatuur en plafondretour",
    "Plafondtoevoer van warme lucht minder dan 8 ° C boven de gemiddelde ruimtetemperatuur waarbij de snelheid van de toevoerluchtstraal 0,8 minder is dan 0,8 m / s binnen 1,4 m van de vloer en plafondretour",
    "Plafondtoevoer van warme lucht minder dan 8 ° C boven de gemiddelde ruimtetemperatuur waarbij de toevoerluchtstraal 1,0 snelheid gelijk is aan of groter is dan 0,8 m / s binnen 1,4 m van de vloer en plafondretour",
    "Vloertoevoer van warme lucht en vloer retour",
    "Vloertoevoer van warme lucht en plafond retour",
    "Uitlaat voor make-uptoevoer die zich meer dan de helft van de ruimte van de uitlaat, de retour of beide bevindt",
    "Uitlaat voor make-uptoevoer bevindt zich op minder dan de helft van de ruimte vanaf de uitlaat, retour of beide",
];

// const safety_options = [
//     "Ceiling supply of cool air.",
//     "Ceiling supply of air and floor return warm",
//     "Ceiling supply of warm air (8 °C ) or more above space temprature and ceiling return",
//     "Ceiling supply of warm air less than 8 °C  above avarage space temprature where the supply air-jet velocity is less than .8 m/s within 1.4 m of the floor and the ceiling return",
//     "Ceiling supply of warm air less than 8 °C  above avarage space temprature where the supply air-jet velocity is equal to or greater than .8 m/s within 1.4 m of the floor and the ceiling return",
//     "Floor supply of warm air and floor return",
//     "Floor supply of warm air and ceiling return",
//     "makeup supply outlet located more than hakf the length of the space from the exhaust, return or both ",
//     "makeup supply outlet located less than hakf the length of the space from the exhaust, return or both ",
// ];
