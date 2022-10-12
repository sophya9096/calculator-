import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn.png";

const Screen7 = ({ props }) => {
    const { classes, people, setPeople, setStandards, handleNext, m2Space } = props;

    const handleCheck = () => {
        if (people >= m2Space) {
            alert("Het aantal mensen moet minder zijn dan m2 Ruimte");
            return;
        }
        let output = (people / m2Space) * 10;
        output = Math.ceil(output);

        if (output === 1) {
            setStandards({
                boubesluit: 1.5,
                recommended: 3.5,
                netherlands: 4,
                covid_advises: 7,
                maximum_safety: 15,
            });
        }
        if (output === 2) {
            setStandards({
                boubesluit: 2.5,
                recommended: 7,
                netherlands: 7.2,
                covid_advises: 14,
                maximum_safety: 30,
            });
        }
        if (output === 3) {
            setStandards({
                boubesluit: 4,
                recommended: 11,
                netherlands: 12,
                covid_advises: 21,
                maximum_safety: 42,
            });
        }
        if (output === 4) {
            setStandards({
                boubesluit: 5,
                recommended: 15,
                netherlands: 16,
                covid_advises: 30,
                maximum_safety: 60,
            });
        }
        if (output === 5) {
            setStandards({
                boubesluit: 6,
                recommended: 18,
                netherlands: 20,
                covid_advises: 35,
                maximum_safety: 70,
            });
        }
        if (output === 6) {
            setStandards({
                boubesluit: 8,
                recommended: 22,
                netherlands: 25,
                covid_advises: 45,
                maximum_safety: 85,
            });
        }
        if (output === 7) {
            setStandards({
                boubesluit: 9,
                recommended: 28,
                netherlands: 29,
                covid_advises: 50,
                maximum_safety: 100,
            });
        }
        if (output === 8) {
            setStandards({
                boubesluit: 10,
                recommended: 30,
                netherlands: 32,
                covid_advises: 59,
                maximum_safety: 115,
            });
        }
        if (output === 9) {
            setStandards({
                boubesluit: 11,
                recommended: 35,
                netherlands: 38,
                covid_advises: 65,
                maximum_safety: 130,
            });
        }
        if (output === 10) {
            setStandards({
                boubesluit: 13,
                recommended: 38,
                netherlands: 40,
                covid_advises: 70,
                maximum_safety: 140,
            });
        }

        handleNext();
    };

    return (
        <div className={classes.formScreen1}>
            <h1>Hoeveel mensen verwacht u maximaal in de ruimte</h1>

            <div className={classes.formScreenInput}>
                <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(+e.target.value === 0 ? e.target.value.replace(/^0+/, "") : +e.target.value)}
                    min={1}
                    step={1}
                    placeholder={"20 personen"}
                />
                <IconButton onClick={handleCheck} disabled={!people}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
        </div>
    );
};

export default Screen7;
