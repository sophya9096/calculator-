import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import Logo from "../../../assets/images/logo.png";

const Screen12 = ({ props }) => {
    const { classes, m2Space, people, people1, people2, standard, roomMeasure, m3Rate, ACH_Formula, airCleaner, CADR, specificStandard } =
        props;

    return (
        <div className={classes.result}>
            <div className={classes.subResult}>
                <h1> Input van huidige situatie (ventilatie) </h1>
                <div className={classes.subResultAllData}>
                    <div className={classes.subResultDatasChild}>
                        <p>Aantal m2 </p>
                        <h3> {m2Space} m2 </h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Hoogte in meters </p>
                        <h3> {roomMeasure ? roomMeasure : 0} m </h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Huidige ventilatie debiet </p>
                        <h3> {m3Rate} m3/h </h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Schonelucht voor</p>
                        <h3> {people1} personen</h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Luchtverversing p/uur ACH </p>
                        <h3> {ACH_Formula(m3Rate).toFixed(1)} ACH</h3>
                    </div>
                </div>
            </div>
            <div className={`${classes.subResult} ${classes.subResultSelect}`}>
                <h1> De gekozen schone lucht norm </h1>
                <h2>
                    {standard?.text} ({standard?.dm3} dm3)
                    <span />
                </h2>
            </div>

            <div className={classes.subResult}>
                <h1> Specificaties gekozen Luchtreiniger </h1>
                <div className={classes.subResultAllData}>
                    <h2> {airCleaner?.title} </h2>
                    <div className={classes.subResultDatasChild}>
                        <p>CADR </p>
                        <h3> {CADR} </h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Calculated ACH op ruimte </p>
                        <h3> {ACH_Formula(CADR).toFixed(1)} </h3>
                    </div>
                    <div className={classes.subResultDatasChild}>
                        <p>Schonelucht voor</p>
                        <h3> {people2} </h3>
                    </div>
                </div>
            </div>
            <div className={classes.subResultAllPeople}>
                <h2>Veilige lucht voor het aantal bezoekers met het inzetten van huidige ventilatiesysteem en één luchtreiniger.</h2>
                <h3>{people1 + people2} personen</h3>
            </div>
            <div className={classes.subResultSuggestHeading}>
                <h2>
                    Om het doel te behalen van schone lucht voor het aantal mensen dat je maximaal in je ruimte wilt toelaten hebben wij ook
                    berekend hoeveel lucht reinigers je hiervoor nodig hebt.
                </h2>
            </div>
            <div className={classes.formResultSuggestions}>
                <div className={classes.formResultSuggestionFooter}>
                    <h2>Aantal gewenste bezoekers </h2>
                    <p className={classes.selectedPeople}>{people ? people : 0}</p>
                </div>

                <div className={classes.formResultSuggestionHeading}>
                    <h2>Gekozen veiligheids norm </h2>
                    {window.innerWidth < 550 && <h2>Aantal luchteinigers</h2>}
                </div>
                <div className={classes.formResultSuggestionsPurifiers}>
                    {standardOptions.map((option, index) => {
                        const number =
                            index === 0
                                ? specificStandard?.boubesluit
                                : index === 1
                                ? specificStandard.recommended
                                : index === 2
                                ? specificStandard?.netherlands
                                : specificStandard?.covid_advises;
                        return (
                            <div key={index} className={classes.formResultSuggestionsPurifier}>
                                <h3
                                    className={
                                        index === 0
                                            ? classes.color1
                                            : index === 1
                                            ? classes.color2
                                            : index === 2
                                            ? classes.color3
                                            : index === 3
                                            ? classes.color4
                                            : null
                                    }
                                >
                                    {option.text}
                                </h3>
                                <p className={standard?.text === option.text ? classes.selected : null}>
                                    {number > 0.5 ? Math.round(number) : 0} Purifier
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div style={{ borderBottom: "none" }} className={classes.formResultSuggestionFooter}>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className={classes.formScreenInput}>
                <p>Plan hier een telefonische afspraak in voor verdere toelichting</p>
                <IconButton>
                    <a target="_blank" rel="noreferrer" href="https://call-back.co/?shopname=airliable">
                        <img src={ArrowImg} alt="" />
                    </a>
                </IconButton>
            </div>

            <div className={classes.formScreenInput}>
                <p>ga terug naar het hoofdmenu</p>
                <IconButton>
                    <a target="_blank" rel="noreferrer" href="https://www.airthority.nl">
                        <img src={ArrowImg} alt="" />
                    </a>
                </IconButton>
            </div>
            <p>* Er kunnen geen rechten aan deze berekening ontleend worden</p>
        </div>
    );
};

export default Screen12;

const standardOptions = [
    { m3: 12, text: "Bouwbesluit uit 2005", dm3: 3.4 },
    { m3: 36, text: "ASHRAE", dm3: 10 },
    { m3: 40, text: "Netherlands (Ariens et AI..)", dm3: 111 },
    { m3: 72, text: "Concept veilig sporten tijdens Covid19", dm3: 20 },
];
