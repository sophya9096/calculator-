import React from "react";
import { IconButton, Slider, withStyles } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import ACImg from "../../../assets/images/AC.png";
import RemoteImg from "../../../assets/images/Remote.png";

const Screen12 = ({ props }) => {
    const {
        classes,
        handleNext,
        m2Space,
        people,
        standard,
        ventilationRate,
        specificStandardReplica2,
        standardValue,
        // specificStandardReplica,
    } = props;

    // console.log({ specificStandardReplica, specificStandardReplica2 });

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
        <div className={classes.result}>
            <div className={classes.subResult}>
                <h1> Result based on your entered data </h1>
                <div className={classes.subResultDatas}>
                    <h2> {m2Space} m2 </h2>
                    <h2> {people} persons </h2>
                </div>
            </div>
            <div className={classes.subResult}>
                <h1> Desired Standard </h1>
                <h2>
                    <span /> {standard} 20 dm3
                </h2>
            </div>
            <div className={classes.subResult}>
                <h1> Advice </h1>
                <div className={classes.subResultTable}>
                    <div className={classes.subResultTableData}>
                        <img src={RemoteImg} alt="" />
                        <div className={classes.subResultTableDataInfo}>
                            <h2>Adjust Your Air Cleaning rate</h2>
                            <div className={classes.ventilationBar}>
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    min={0}
                                    step={0.1}
                                    max={1}
                                    value={standardValue}
                                />
                            </div>
                            <div className={classes.tag}>
                                <p>{standardValue} ACH</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.subResultTableData}>
                        <img src={ACImg} alt="" />
                        <div className={classes.subResultTableDataInfo}>
                            <h2>Adjust Your Ventilation</h2>
                            <div className={classes.ventilationBar}>
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    min={0}
                                    max={10}
                                    value={ventilationRate}
                                />
                            </div>
                            <div className={classes.formScreen10Counts}>
                                <h2>0</h2>
                                <h2>10</h2>
                            </div>

                            <div className={classes.tag}>
                                <p>{ventilationRate} ACH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.subResult}>
                <div className={classes.subResultAdvice}>
                    <div className={classes.subResultData}>
                        <h1>Advice for the other standards</h1>
                        <div className={classes.subResultDataDescription}>
                            <p>
                                <span className={classes.decsRed}>Oude norm </span> bouwbesluit uit 2005
                            </p>
                            <p>3,5 liter schone zuurstof dm2/s per person = 0,49 ACH</p>
                        </div>
                        <div className={classes.subResultDataDescription}>
                            <p>
                                <span className={classes.decsOrange}>Minimum Safety </span> Low intensity of people
                            </p>
                            <p>15 liter schone zuurstof dm2/s per person </p>
                        </div>
                        <div className={classes.subResultDataDescription}>
                            <p>
                                <span className={classes.decsYellow}>Medium Safety </span> Low intensity of people
                            </p>
                            <p>20 liter schone zuurstof dm2/s per person </p>
                        </div>
                        <div className={classes.subResultDataDescription}>
                            <p>
                                <span className={classes.decsLGreen}>Resommended Safety</span> High intensity of people
                            </p>
                            <p>25 liter schone zuurstof dm2/s per person </p>
                        </div>
                        <div className={classes.subResultDataDescription}>
                            <p>
                                <span className={classes.decsDGreen}>Ultra Safety</span> High intensity of people
                            </p>
                            <p>40 liter schone zuurstof dm2/s per person </p>
                        </div>
                    </div>
                    <div className={classes.subResultData}>
                        <h1>Ammount of Air purifiers</h1>
                        <div className={classes.subResultDataCounts}>
                            <h3 style={standard === "Norm Boubesluit uit 2005" ? { background: "#a5e463" } : null}>
                                {specificStandardReplica2.boubesluit > 0.5 ? Math.round(specificStandardReplica2.boubesluit) : 0}
                            </h3>
                            <h3 style={standard === "Recommended ASHRAE" ? { background: "#a5e463" } : null}>
                                {specificStandardReplica2.recommended > 0.5 ? Math.round(specificStandardReplica2.recommended) : 0}
                            </h3>
                            <h3 style={standard === "Netherlands (Areins et AI..)" ? { background: "#a5e463" } : null}>
                                {specificStandardReplica2.netherlands > 0.5 ? Math.round(specificStandardReplica2.netherlands) : 0}
                            </h3>
                            <h3 style={standard === "COVID-19 Advises" ? { background: "#a5e463" } : null}>
                                {specificStandardReplica2.covid_advises > 0.5 ? Math.round(specificStandardReplica2.covid_advises) : 0}
                            </h3>
                            <h3 style={standard === "Maximum Safety" ? { background: "#a5e463" } : null}>
                                {specificStandardReplica2.maximum_safety > 0.5 ? Math.round(specificStandardReplica2.maximum_safety) : 0}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.formScreenInput}>
                <p>Email me a certificate of safe air</p>
                <IconButton onClick={handleNext} disabled={true}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
            <div className={classes.formScreenInput}>
                <p>go Back to homepage</p>
                <IconButton onClick={handleNext} disabled={true}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
            <p>* Er kunnen geen retchen aan dezen berekening ontleend worden</p>
        </div>
    );
};

export default Screen12;
