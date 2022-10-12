import React, { useEffect, useState } from "react";
import { Button, Dialog, IconButton, TextField } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import ArrowBackImg from "../../../assets/images/arrowBack.png";

import OptionsImg from "../../../assets/images/options.png";
import { Autocomplete } from "@material-ui/lab";

const NewScreen3 = ({ props }) => {
    const {
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
    } = props;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPeople2(Math.round(CADR / standard?.m3));
    }, [CADR, standard?.m3, setPeople2]);

    const handleSetAirCleaner = (value) => {
        if (value) {
            setCADR(value?.CADR);
        }
        setAirCleaner(value);
    };

    const handleSetCADR = (e) => {
        setCADR(+e.target.value === 0 ? e.target.value.replace(/^0+/, "") : +e.target.value);
    };

    const moreInfo = (
        <Dialog maxWidth={"lg"} fullWidth={true} open={open} onClose={() => setOpen(false)}>
            <div className={classes.moreInfoDialog}>
                <div className={classes.moreInfoDialogSection}>
                    <h1 style={{ textAlign: "left" }}>Wat is CADR </h1>
                    <p>
                        1. De afgiftesnelheid van schone lucht is een combinatie van filterprestaties en ook hoeveel lucht er door dat
                        filter gaat (bijv. Een apparaat met een geweldig filter maar er komt geen lucht doorheen, is niet effectief)
                    </p>
                    <p>2. Zoek vervolgens naar een hoge CADR, in eenheden van cfm of kubieke voet per minuut </p>
                    <p>3. CADR wordt bepaald voor verschillende deeltjesgroottes; gebruik de rook- of stofklasse</p>
                </div>
                <div className={classes.moreInfoDialogSection}>
                    <h1 style={{ textAlign: "left" }}>Wat is ACH </h1>
                    <br />
                    <h3>
                        Luchtverversingen per uur, afgekort ACPH of ACH, of luchtverversingssnelheid is een maat voor het luchtvolume dat in
                        één uur wordt toegevoegd aan of verwijderd uit een ruimte, gedeeld door het volume van de ruimte.[1] Als de lucht in
                        de ruimte uniform of perfect gemengd is, is luchtverversing per uur een maat voor hoe vaak de lucht in een bepaalde
                        ruimte elk uur wordt vervangen.
                    </h3>
                    <br />
                    <h3>
                        In veel luchtverdeelsystemen is de lucht niet uniform en ook niet perfect gemengd. Het werkelijke percentage van de
                        lucht in een behuizing dat in een periode wordt uitgewisseld, hangt af van de efficiëntie van de luchtstroom van de
                        behuizing en de methoden die worden gebruikt om deze te ventileren. De werkelijke hoeveelheid lucht die in een goed
                        gemengd ventilatiescenario wordt veranderd, zal 63,2% zijn na 1 uur en 1 ACH.[2] Om evenwichtsdruk te bereiken, moet
                        de hoeveelheid lucht die de ruimte verlaat en de ruimte binnenkomt hetzelfde zijn.
                    </h3>
                    <br />

                    <h3>
                        In de meest elementaire zin kunnen we de luchtstroom van zowel luchtreiniger als ventilatiesysteem toevoegen; het
                        luchtvolume van de kamer blijft hetzelfde. Theoretisch gezien kunnen we de twee ACH bij elkaar optellen, ja. De
                        functie van het ventilatiesysteem en de luchtreiniger is echter niet hetzelfde; ventilatie circuleert de lucht
                        terwijl de luchtreiniger de zwevende deeltjes verzamelt.
                    </h3>
                    <br />

                    <h3>
                        Alen BreatheSmart gebruikt 2 ACH. Voorbeeld: Alen BreatheSmart 75i – de nummer 1 luchtreiniger – heeft een
                        aanbevolen dekkingsgebied van 1.300 m². De maximale luchtstroom is 350 CFM. Bij 5 ACH is het aanbevolen
                        dekkingsgebied 52 vierkante meter.
                    </h3>
                    <br />

                    <h3>
                        Het dekkingsgebied van Coway luchtreinigers is gebaseerd op 2 ACH of 5 ACH. Voorbeeld: Big Airmega 400 heeft een
                        dekkingsgebied van 1.560 m2 met een CADR-classificatie van 350 (2 ACH). De hoogwaardige Coway AP-1512HH heeft een
                        dekkingsgebied van 361 m² met een rating van 246 CADR (5 ACH).
                    </h3>
                    <br />

                    <h3>
                        Molekule heeft een aanbevolen dekkingsgebied, maar biedt geen ACH-, CADR- of maximale luchtstroomgegevens. Molekule
                        Air heeft bijvoorbeeld een dekkingsgebied van 600 vierkante voet, maar het is onmogelijk om af te leiden hoeveel
                        luchtverversingen het per uur maakt.
                    </h3>
                    <br />

                    <h3>
                        Honeywell gebruikt 5 ACH. Voorbeeld: Honeywell HPA300 heeft een dekkingsgebied van 465 m2 met een CADR-classificatie
                        van 300 (5 ACH).
                    </h3>
                    <br />

                    <h3>
                        Levoit luchtreinigers zijn interessant; ze gebruiken 3,33 ACH met hun beste model. Voorbeeld: Levoit LV-H135 heeft
                        een dekkingsgebied van 463 m² en een rating van 360 CADR. De lucht wordt elke 18 minuten ververst; zo maakt de
                        Levoit-unit 3,33 luchtwisselingen per uur.
                    </h3>
                    <br />

                    <h3>
                        Okaysou gebruikt 3 luchtverversingen per uur. Voorbeeld: hun meest populaire Okaysou AirMax8Lluchtreiniger heeft een
                        dekkingsgebied van 500 m², met een 210 CADR-classificatie (3 ACH).
                    </h3>
                    <br />

                    <h3>
                        Dyson is erg verlegen om de afmetingen van de kamers te onthullen. Daarom is het voor geen enkele
                        Dyson-luchtreiniger mogelijk om de ACH te berekenen.
                    </h3>
                    <br />

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
        <div className={classes.v2FormScreen2}>
            <h1>Selecteer een luchtreiniger</h1>
            <div className={classes.formScreenInput}>
                <Autocomplete
                    id="combo-box-demo2"
                    value={airCleaner}
                    onChange={(e, value) => handleSetAirCleaner(value)}
                    options={airCleaners}
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option) => option.title}
                    style={{ padding: "15px 10px", flex: 1 }}
                    renderInput={(params) => <TextField {...params} placeholder="Select your air cleaner" />}
                />
            </div>

            <div className={classes.v2FormScreen2CountsResult}>
                <p>CADR, in kubieke feet per min (cfm)</p>
                <div className={classes.v2FormScreen2CADR}>
                    <span>Pas hier de CADR aan</span>
                    <input type="number" value={CADR} onChange={(e) => handleSetCADR(e)} min={0} />
                    {/* <p>{airCleaner && airCleaner?.CADR}</p> */}
                </div>
            </div>

            <div className={classes.v2FormScreen2CountsResult}>
                <p>
                    Aantal personen die u van veilige lucht voorziet op basis van <span> {standard?.text} </span>
                </p>
                <div className={classes.v2FormScreen2CountsData}>
                    <p>{people2} personen</p>
                </div>
            </div>

            <div className={classes.v2FormScreen2Bottom}>
                <div className={classes.v2FormScreen2BottomLeft}>
                    <h3>Berekende ACH</h3>
                    <p>
                        <b>{ACH_Formula(CADR).toFixed(1)} ACH:</b> luchtwisselingen per uur betekent dat de lucht binnen gemiddeld.
                    </p>
                    <p>
                        <b>{ACH_Formula(CADR).toFixed(1)}</b> gemiddeld per uur wordt ververst met schone lucht
                    </p>
                </div>

                <div className={classes.tag}>
                    <p>{ACH_Formula(CADR).toFixed(1)} ACH</p>
                </div>
            </div>
            <div className={classes.v2FormScreen2CountsResult}>
                <p>Vloeroppervlak </p>
                <div className={classes.v2FormScreen2CountsData}>
                    <div className={classes.v2FormScreen2CountsDataValue}>
                        <p>{ft2.toFixed(0)}</p>
                        <span>ft2</span>
                    </div>
                    <div className={classes.v2FormScreen2CountsDataValue}>
                        <p>{m2Space}</p>
                        <span>m2</span>
                    </div>
                </div>
            </div>
            <div className={classes.v2FormScreen2CountsResult}>
                <p>Plafondhoogte</p>
                <div className={classes.v2FormScreen2CountsData}>
                    <div className={classes.v2FormScreen2CountsDataValue}>
                        <p>{ft.toFixed(0)}</p>
                        <span>ft</span>
                    </div>
                    <div className={classes.v2FormScreen2CountsDataValue}>
                        <p>{roomMeasure}</p>
                        <span>m</span>
                    </div>
                </div>
            </div>
            {/* <div className={classes.v2FormScreen2Bottom}>
                    <h3>Berekende ACH</h3>
                    <div className={classes.tag}>
                        <p>{ACH_Formula(airCleaner && airCleaner?.CADR).toFixed(1)} ACH</p>
                    </div>
                </div>
                <p>2.2 ACH qemmidelde van een spartschool</p> */}
            <div className={classes.formScreen8Footer}>
                <IconButton disabled={!airCleaner} className={classes.screen4Button} onClick={handleNext}>
                    <img src={ArrowImg} alt="" />
                </IconButton>

                <Button
                    style={{ height: "50px" }}
                    onClick={() => setOpen(true)}
                    className={classes.formScreen8Btn}
                    endIcon={<img src={OptionsImg} alt="" />}
                >
                    Wat is CADR
                </Button>
            </div>
            {moreInfo}
        </div>
    );
};

export default NewScreen3;

const airCleaners = [
    {
        title: "PlasmaMade AAC 37170 (CADR 1228)",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 1228,
        ACH: 4.9,
    },
    {
        title: "Cyclo Tower",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 1500,
        ACH: 6.0,
    },
    {
        title: "Blueair Pro XL",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 8,
        CADR: 800,
        ACH: 4.0,
    },
    {
        title: "Iqai",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 350,
        ACH: 1.4,
    },
    {
        title: "TROTEC TACV",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 1200,
        ACH: 4.8,
    },
    {
        title: "MONARCH “Monarch Clean air",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 1320,
        ACH: 5.3,
    },
    {
        title: "Levoit Vital 100 True HEPA Air Purifier",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 130,
        ACH: 3.1,
    },
    {
        title: "Whirlpool® WPT80 Whispure™ Large Tower Air Purifier",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 142,
        ACH: 3.4,
    },
    {
        title: "Oransi OV200 Air Purifier",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 150,
        ACH: 3.6,
    },
    {
        title: "Conway Airmega 150",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 161,
        ACH: 3.9,
    },
    {
        title: "BioGS 2.0 Ultra Quiet Air Purifier",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 180,
        ACH: 4.3,
    },
    {
        title: "Honeywell True HEPA Large Room Air Purifier With Allergen Remover",
        floorArea_squareFeet: 250,
        celingHeight_feet: 10,
        CADR: 190,
        ACH: 4.6,
    },
    {
        title: "MinusA2 Ultra Quiet Air Purifier",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 200,
        ACH: 2.6,
    },
    {
        title: "Coway Airmega AP-1512HH",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 246,
        ACH: 3.0,
    },
    {
        title: "Levoit LV-H134 Tower Pro True HEPA Air Purifier",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 312,
        ACH: 3.7,
    },
    {
        title: "Honeywell True HEPA Bluetooth Smart Air Purifier With Allergen Remover",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 320,
        ACH: 3.8,
    },
    {
        title: "Whirlpool® WPPRO2000 Whispure™ Air Purifier",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 328,
        ACH: 3.9,
    },
    {
        title: "Oransi EJ120 Air Purifier",
        floorArea_squareFeet: 500,
        celingHeight_feet: 10,
        CADR: 333,
        ACH: 4.0,
    },
    {
        title: "Alen BreatheSmart 75i True HEPA Air Purifier",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 347,
        ACH: 1.4,
    },
    {
        title: "Blueair Blue Pure 221",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 350,
        ACH: 1.4,
    },
    {
        title: "Blueair Classic 605 with Particle Filter",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 500,
        ACH: 2.0,
    },
    {
        title: "Medify MA-112 V2.0 Air Purifier",
        floorArea_squareFeet: 1500,
        celingHeight_feet: 10,
        CADR: 560,
        ACH: 2.2,
    },
];
