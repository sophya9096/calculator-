import React, { useState, useEffect, useCallback } from "react";
import classes from "./Form.module.css";
import Logo from "../../assets/images/logo2.png";
import { useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import ArrowImg from "../../assets/images/arrowBtn.png";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
import Screen6 from "./components/Screen6";
import Screen7 from "./components/Screen7";
import Screen8 from "./components/Screen8";
import Screen9 from "./components/Screen9";
import Screen10 from "./components/Screen10";
import Screen11 from "./components/Screen11";
import Screen12 from "./components/Screen12";
import Screen13 from "./components/Screen13";

// import { autoPlay } from "react-swipeable-views-utils";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Form = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState("");
    const [m2Space, setM2Space] = useState(0);
    const [roomMeasure, setRoomMeasure] = useState();
    const [people, setPeople] = useState();
    const [business, setBusiness] = useState("Office");
    const [standard, setStandard] = useState("Norm Boubesluit uit 2005");
    const [standardValue, setStandardValue] = useState();
    const [ventilationMandatory, setVentilationMandatory] = useState("");
    const [email, setEmail] = useState("");
    const [ventilationTitle, setVentilationTitle] = useState("");
    const [ventilationRate, setVentilationRate] = useState(2.2);
    const [airCleaner, setAirCleaner] = useState("");
    const [standards, setStandards] = useState({
        boubesluit: 0,
        recommended: 0,
        netherlands: 0,
        covid_advises: 0,
        maximum_safety: 0,
    });
    const [specificStandard, setSpecificStandard] = useState({
        boubesluit: 0,
        recommended: 0,
        netherlands: 0,
        covid_advises: 0,
        maximum_safety: 0,
    });
    const [specificStandardReplica, setSpecificStandardReplica] = useState({});
    const [specificStandardReplica2, setSpecificStandardReplica2] = useState({});

    useEffect(() => {
        if (activeStep % 2 === 0 && activeStep < 3) {
            setTimeout(() => {
                setActiveStep(activeStep + 1);
            }, 3000);
        }
        window.scrollTo(0, 0);
    }, [activeStep]);

    const handleNext = useCallback((step) => {
        if (typeof step === "number") return setActiveStep(step);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const newScreens = [
        Screen1,
        Screen2,
        Screen3,
        Screen4,
        Screen5,
        Screen6,
        Screen7,
        Screen8,
        Screen9,
        Screen10,
        Screen11,
        Screen12,
        Screen13,
    ];

    const props = {
        activeStep,
        setActiveStep,
        name,
        setName,
        m2Space,
        setM2Space,
        people,
        setPeople,
        business,
        setBusiness,
        standard,
        setStandard,
        standards,
        setStandards,
        ventilationMandatory,
        setVentilationMandatory,
        email,
        setEmail,
        ventilationTitle,
        setVentilationTitle,
        classes,
        handleNext,
        roomMeasure,
        setRoomMeasure,
        specificStandard,
        setSpecificStandard,
        ventilationRate,
        setVentilationRate,
        airCleaner,
        setAirCleaner,
        specificStandardReplica,
        setSpecificStandardReplica,
        specificStandardReplica2,
        setSpecificStandardReplica2,
        standardValue,
        setStandardValue,
    };

    return (
        <div className={classes.container}>
            <IconButton disabled={activeStep === 0 || activeStep === 1 || activeStep === 12} onClick={handleBack}>
                <img src={ArrowImg} alt="" />
            </IconButton>
            <div className={classes.form}>
                <img src={Logo} alt="" />
                <div className={classes.silder}>
                    <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents={false}
                    >
                        {newScreens.map((Screen, index) => (
                            <Screen key={index} props={props} />
                        ))}
                    </SwipeableViews>
                </div>
            </div>
        </div>
    );
};

export default Form;
