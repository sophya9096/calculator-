import React, { useState, useEffect, useCallback } from "react";
import classes from "./Form2.module.css";
import Logo from "../../assets/images/logo.png";
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
import Screen12 from "./components/Screen12";
import NewScreen1 from "./components/NewScreen1";
import NewScreen2 from "./components/NewScreen2";
import NewScreen3 from "./components/NewScreen3";
import NewScreenResult from "./components/NewScreenResult";

const Form = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState("");
    const [m2Space, setM2Space] = useState();
    const [roomMeasure, setRoomMeasure] = useState();
    const [people, setPeople] = useState();
    const [people1, setPeople1] = useState();
    const [people2, setPeople2] = useState();
    const [m3Rate, setM3Rate] = useState(1500);
    const [CADR, setCADR] = useState(1228);
    const [business, setBusiness] = useState("Kantoor");
    const [standardValue, setStandardValue] = useState();
    const [ventilationMandatory, setVentilationMandatory] = useState("");
    const [email, setEmail] = useState("");
    const [ventilationTitle, setVentilationTitle] = useState("Plafond toevoer van koele lucht");
    const [standard, setStandard] = useState();
    const [airCleaner, setAirCleaner] = useState({
        title: "PlasmaMade AAC 37170 (CADR 1228)",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 1228,
        ACH: 4.9,
    });

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

    // const [ventilationRate, setVentilationRate] = useState(2.2);
    // const [specificStandardReplica, setSpecificStandardReplica] = useState({});
    // const [specificStandardReplica2, setSpecificStandardReplica2] = useState({});

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
        NewScreen1,
        NewScreen2,
        NewScreen3,
        Screen8,
        Screen12,
        NewScreenResult,
    ];

    // Calculations
    let ft2 = m2Space * 10.76;
    let ft = roomMeasure * 3.28;

    const ACH_Formula = useCallback((value) => (value * 60) / (ft2 * ft), [ft, ft2]);

    const prop1 = { classes };
    const prop2 = { classes, name, setName, handleNext };
    const prop3 = { classes, name };
    const prop4 = { classes, setBusiness, business, handleNext };
    const prop5 = { classes, m2Space, setM2Space, handleNext };
    const prop6 = { classes, setRoomMeasure, roomMeasure, handleNext };
    const prop7 = { classes, people, setPeople, setStandards, handleNext, m2Space };
    const newProp1 = { classes, handleNext, standard, setStandard };
    const newProp2 = { classes, m2Space, roomMeasure, handleNext, m3Rate, setM3Rate, ft2, ft, ACH_Formula, standard, people1, setPeople1 };
    const newProp3 = {
        classes,
        m2Space,
        roomMeasure,
        handleNext,
        ft2,
        ft,
        ACH_Formula,
        airCleaner,
        setAirCleaner,
        standard,
        people2,
        setPeople2,
        CADR,
        setCADR,
        // isInput,
        // setIsInput,
    };
    const prop8 = {
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
        standardValue,
    };
    const newResultProp = {
        classes,
        handleNext,
        setEmail,
        email,
        name,
        m2Space,
        people,
        people1,
        people2,
        standard,
        roomMeasure,
        m3Rate,
        ACH_Formula,
        airCleaner,
        specificStandard,
        CADR,
    };

    const props = [prop1, prop2, prop3, prop4, prop5, prop6, prop7, newProp1, newProp2, newProp3, prop8, newResultProp];

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
                            <Screen key={index} props={props[index === 12 ? 11 : index]} />
                        ))}
                    </SwipeableViews>
                </div>
            </div>
        </div>
    );
};

export default Form;
