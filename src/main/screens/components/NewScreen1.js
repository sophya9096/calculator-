import React, { useState } from "react";
import { Button, Dialog } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import ArrowBackImg from "../../../assets/images/arrowBack.png";
import OptionsImg from "../../../assets/images/options.png";

const NewScreen1 = ({ props }) => {
    const { classes, handleNext, standard, setStandard } = props;

    const [open, setOpen] = useState(false);

    const standardOptions = [
        { m3: 12, text: "Bouwbesluit uit 2005", dm3: 3.4 },
        { m3: 36, text: "ASHRAE", dm3: 10 },
        { m3: 40, text: "Netherlands (Areins et AI..)", dm3: 11.1 },
        { m3: 72, text: "Concept veilig sporten tijdens Covid19", dm3: 20 },
        // "Maximum Safety",
    ];

    const moreInfo = (
        <Dialog maxWidth={"lg"} fullWidth={true} open={open} onClose={() => setOpen(false)}>
            <div className={classes.moreInfoDialog}>
                <div className={classes.moreInfoDialogSection}>
                    <h1>Intro</h1>
                    <p>
                        Het vereiste ventilatiedebiet per persoon wordt bepaald door internationale, nationale of lokale voorschriften of
                        richtlijnen. Zo beveelt de Guidebook Sport accommodaties in Nederland in het tijdperk van vóór COVID-19 (Ariëns et
                        al., 2008) 11,1 dm3 / s per persoon aan. ASHRAE (2019) beveelt 10 dm2 / s per persoon aan. Het concept Europese
                        richtlijn voor veilig sporten in fitnesscentra tijdens COVID-19 adviseert 20 dm3/s per persoon. Dit zijn waarden die
                        vaak aanzienlijk hoger zijn dan de minimumvereisten van bouwvoorschriften
                    </p>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>Bouwbesluit</h2>
                        <p>
                            3,44 dm³/s/ per persoon De ventilatiekwaliteit moet minstens voldoen aan de minimumeisen van het Bouwbesluit.
                            Het Bouwbesluit werkte aanvankelijk met bezettingsgraden. Deze werkwijze werd nadien verlaten en vervangen door
                            een personenbenadering. Dit betekent dat er een minimum ventilatiedebiet per persoon moeten worden voorzien.
                            Voor nieuwbouw stimuleert het Bouwbesluit 6,5 dm³/s/persoon voor de sportfunctie. Voor bestaande bouw is het
                            minimumdebiet 3,44 dm³/s/persoon. Dit zijn de minimale eisen.{" "}
                        </p>
                        <div className={classes.shortDiv}>
                            <a target="_blank" rel="noreferrer" href="https://www.sciencedirect.com/science/article/pii/S0360132321000706">
                                “https://www.sciencedirect.com/science/article/pii/S0360132321000706"
                            </a>
                        </div>
                        <h2>Ariens et al., 200</h2>
                        <p>Handboek Sportaccommodaties van het NOC*NSF </p>
                        <h2>11,1 dm3 / s per persoon</h2>
                        <p>
                            De NOC*NSF-normen zijn privaatrechtelijke normen, ofwel afspraken tussen belanghebbende partijen over de
                            minimale eisen/normen waarin sportvloeren en sportaccommodaties in Nederland dienen te voldoen, teineinde voor
                            een NOC*NSF/ sportbondcertificaat in aanmerking te komen. In een norm worden de gewenste kwaliteit en prestaties
                            van sportvloeren en sportaccommodaties vastgelegd. Bij deze normen zijn sportfunctionaliteit, veiligheid en
                            duurzaamheid de belangrijkste aspecten. De NOC*NSF-normen werden gepubliceerd in 2008. Zij verwijzen wat
                            ventilatie betreft deels nog naar de oudere benadering van het Bouwbesluit met bezettingsgraden in plaats van
                            naar de personenbenadering. Echter, de NOC*NSF-normen bevatten ook belangrijke richtlijnen wat betreft het
                            totale ventilatievoud en het type ventilatie (natuurlijk versus mechanisch). Citaten:
                        </p>
                        <h2>Voor een fitnessruimte:</h2>
                        <p>
                            “De ventilatie-installatie van de fitnessruimte dient minimaal 4 maal de ruimte-inhoud per uur in de winter en 6
                            maal de ruimte-inhoud per uur in de zomer te ventileren.”
                        </p>
                        <p>
                            “Om een minimum ventilatievoud te garanderen, afhankelijk van de gebruiksfunctie, is mechanische ventilatie
                            noodzakelijk.”
                        </p>
                        <h2>Voor een groepslesruimte:</h2>
                        <p>
                            “De ventilatie-installatie van de groepslesruimte dient minimaal 6 maal de ruimte-inhoud per uur in de winter en
                            8 maal de ruimte-inhoud per uur in de zomer te ventileren.”
                        </p>
                        <p>
                            “Om een minimum ventilatievoud te garanderen, afhankelijk van de gebruiksfunctie, is mechanische ventilatie
                            noodzakelijk.”
                        </p>
                        <h2>Voor een indoor-cyclingruimte:</h2>
                        <p>
                            “De ventilatie-installatie van de indoor-cyclingruimte dient minimaal 8 maal de ruimte-inhoud per uur in de
                            winter en 10 maal de ruimte-inhoud per uur in de zomer te ventileren.”
                        </p>
                        <p>
                            “Om een minimum ventilatievoud te garanderen, afhankelijk van de gebruiksfunctie, is mechanische ventilatie
                            noodzakelijk.”
                        </p>
                    </div>
                    <cite className={classes.cite}>
                        Guidebook sports accommodations (in Dutch), Handboek Sportaccommodaties. ISA Sport, NOC*NSF, Arko Sports Media BV”
                    </cite>

                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>ANSI/ASHRAE Standard 62.</h2>
                        <p>
                            De erkende normen voor ontwerp van ventilatiesystemen en acceptabele binnenluchtkwaliteit (IAQ). Uitgebreid en
                            herzien voor 2019, specificeren beide normen minimale ventilatiesnelheden en andere maatregelen om nadelige
                            gezondheidseffecten voor inzittenden tot een minimum te beperken.{" "}
                        </p>
                        <h2>Aanbevolen 10 dm2/s per persoon.</h2>
                    </div>
                    <div className={classes.shortDiv}>
                        <a
                            style={{ color: "#000", textAlign: "left" }}
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.scribd.com/document/358379039/Pages-From-ASHRAE-62-1-2010"
                        >
                            See: https://www.scribd.com/document/358379039/Pages-From-ASHRAE-62-1-2010
                        </a>
                    </div>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>
                            Concept Europese richtlijn voor veilig sporten in fitnesscentra tijdens COVID-19 Adviseert 20 dm3 / s per
                            persoon
                        </h2>
                        <p>
                            Blocken B, van Druenen T, Ricci A, et al. 2021. Ventilation and air cleaning to limit aerosol particle
                            concentrations in a gym during the COVID-19 pandemic.
                        </p>
                    </div>
                    <p>read here the paper:</p>

                    <div className={classes.shortDiv}>
                        <a
                            style={{ color: "#000", textAlign: "left" }}
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.sciencedirect.com/science/article/pii/S0360132321000706"
                        >
                            https://www.sciencedirect.com/science/article/pii/S0360132321000706
                        </a>
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
        <div className={classes.formScreen1}>
            <h1>Aan welke lucht norm wilt u zich houden</h1>

            <div className={classes.v2FormScreen1}>
                <div className={classes.v2FormScreen1Headings}>
                    <h2>m3/h</h2>
                    <h2>dm3/h</h2>
                </div>
                <div className={classes.v2FormScreen1AllData}>
                    {standardOptions.map(({ m3, dm3, text }, index) => (
                        <div key={index} className={classes.v2FormScreen1DataAll}>
                            <div className={classes.v2FormScreen1Data} onClick={() => setStandard({ m3, dm3, text })}>
                                <p>{m3} m3/h</p>
                                <p>{dm3} dm3/s</p>
                                <h3>{text} </h3>
                                <span
                                    className={`${classes.v2FormScreen1CheckBox} ${
                                        standard?.text === text && classes.v2FormScreen1Checked
                                    }`}
                                />
                            </div>
                            <div className={`${classes.v2FormScreen1Values}`}>
                                <p> ({m3} m3/h)</p>
                                <p>({dm3} dm3/s)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ width: "88%" }} className={classes.formScreen8Footer}>
                <Button disabled={!standard} className={classes.screen4Button} onClick={() => handleNext()}>
                    <img src={ArrowImg} alt="" />
                </Button>
                <Button
                    style={{ height: "50px" }}
                    onClick={() => setOpen(true)}
                    className={classes.formScreen8Btn}
                    endIcon={<img src={OptionsImg} alt="" />}
                >
                    Meer info
                </Button>
            </div>
            {moreInfo}
            {/* <embed src="../../../assets/documents/Page-8.pdf" type="application/pdf" width="100%" height="600px" /> */}
        </div>
    );
};

export default NewScreen1;
