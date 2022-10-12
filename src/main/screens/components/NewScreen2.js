import React, { useEffect, useState } from "react";
import { Button, Dialog, IconButton, Slider, withStyles } from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn.png";
import ArrowBackImg from "../../../assets/images/arrowBack.png";

import OptionsImg from "../../../assets/images/options.png";

const Screen10 = ({ props }) => {
    const { classes, handleNext, m3Rate, setM3Rate, ACH_Formula, standard, people1, setPeople1 } = props;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPeople1(Math.round(m3Rate / standard?.m3));
    }, [m3Rate, standard?.m3, setPeople1]);

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

    const moreInfo = (
        <Dialog maxWidth={"lg"} fullWidth={true} fullScreen={false} open={open} onClose={() => setOpen(false)}>
            <div className={classes.moreInfoDialog}>
                <div className={classes.moreInfoDialogSection}>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>
                            Ventilatie is een doeltreffend middel om het risico op een COVID-19-besmetting door aerosolen te verminderen.
                        </h2>

                        <ul>
                            <li>
                                Via de ademhaling komen er aerosolen vrij, die virussen bevatten als de persoon besmet is.Tegelijkertijd
                                wordt er CO2 uitgeademd, een gas waarvan de concentratie in de lucht eenvoudig gemeten kan worden. De
                                CO2-concentratie wordt daarom vaak gebruikt als indicator voor het ventilatiedebiet in ruimten waar personen
                                in aanwezig zijn. Door het gebruik van mondmaskers zal men de verspreiding van aerosolen in de ruimte kunnen
                                beperken bij een gelijkblijvende CO2-productie.
                            </li>
                            <li>Bij het uitademen, komt er CO2 vrij. Bij een rustige activiteit (1,2 MET) is dit ongeveer 20 l/uur.</li>
                            <li>
                                In een ruimte met een permanente bezetting is er een eenduidige relatie tussen het verschil in
                                CO2-concentratie binnen en buiten en het ventilatiedebiet.
                            </li>
                            <li>
                                Voor het risico op virusoverdracht via aerosolen bestaat er geen drempelwaarde voor het ventilatiedebiet, de
                                luchtverversingsgraad of de CO2-concentratie waarmee men het risico op besmetting kan uitsluiten. Hoe meer
                                ventilatie er voorzien wordt, hoe kleiner het risico wordt.
                            </li>
                            <li>
                                Naast het ventilatiedebiet zijn er nog andere factoren die een grote invloed hebben op het risico op
                                virusoverdracht, met name: het aantal blootgestelde personen in een ruimte, het aantal besmette personen in
                                deze ruimte, de duur van de blootstelling, het stemgebruik (zingen, roepen) …
                            </li>
                            <li>
                                Om dit risico te beperken door middel van ventilatie, moet er in de eerste plaats gezorgd worden voor
                                voldoende ventilatie in alle ruimten en moet er voorrang gegeven worden aan het nemen van corrigerende
                                maatregelen in ruimten waar de ventilatie duidelijk onvoldoende is.
                            </li>
                            <li>
                                Een CO2-concentratie die lager is dan 900 ppm, wordt beschouwd als een aanvaardbare waarde om op
                                maatschappelijk vlak de verspreiding van het virus via aerosolen beperkt te houden. In de praktijk kan men
                                het niet of zelden overschrijden van 900 ppm voor een volwassene die een rustige activiteit uitoefent min of
                                meer garanderen bij een ventilatiedebiet van 40 m³/h.persoon. Dit minimale ventilatiedebiet zal hoger zijn
                                bij intensieve activiteiten, aangezien er dan meer CO2 en dus ook meer aerosolen geproduceerd worden.
                            </li>
                            <li>
                                Hoe lager de CO2-concentratie, hoe kleiner het risico op besmetting door aerosolen. Relatie tussen
                                CO2-concentratie en ventilatiedebieten voor rustige activiteiten. CO2-toename t.o.v.buitenconcentratie
                                Indien CO2 buiten 400 ppm Ventilatiedebiet (m³/h.persoon)
                            </li>
                        </ul>
                        <h2>Het meten van je ventilatie debiet?</h2>
                        <p>
                            Indien er mechanische-ventilatiesystemen aanwezig zijn met luchttoevoer en/of -afvoer in dezelfde ruimte, is het
                            zinvol om het ventilatiedebiet te bepalen. Men bepaalt bij voorkeur het ventilatiedebiet in de hoogste stand en
                            eventueel ook de debieten in andere standen.
                        </p>
                        <p>
                            Op basis van deze debieten kan dan een nominale bezettingsgraad N900 bepaald worden. Dit is het aantal personen
                            dat permanent in de ruimte mag verblijven zonder dat er een (belangrijke) overschrijding van de toelaatbare
                            CO2-concentraties zal plaatsvinden en zonder de noodzaak om CO2-metingen uit te voeren op voorwaarde dat de
                            ventilatie correct gebruikt wordt.
                        </p>
                        <p>Een bepaling van de ventilatiedebieten kan op meerdere manieren gebeuren:</p>
                        <p>
                            1. indien er in het kader van de codex over het welzijn op het werk al een evaluatie uitgevoerd is, zal het
                            debiet van de mechanische ventilatie normaal gezien gekend zijn.
                        </p>
                        <p>2. het is ook mogelijk om het debiet te meten met een debietmeter.</p>
                        <p>3. een inschatting van het ventilatiedebiet kan ook gebeuren op basis van de evolutie van de CO2- </p>
                        <p>BELANGRIJK: De debieten dienen bepaald te worden bij gesloten ramen en deuren, inclusief binnendeuren.</p>

                        <h2>
                            Tabel 1 Relatie tussen CO<sub>2</sub>-concentratie en Ventilatiedebieten voor rustige activiteiten.
                        </h2>
                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            CO<sub>2</sub>-toename t.o.v. buitenconcentratie
                                        </th>
                                        <th>
                                            Indien CO<sub>2</sub> buiten 400 ppm
                                        </th>
                                        <th>
                                            Ventilatiedebiet (m<sup>3</sup>/h.person)
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>200 </td>
                                        <td>600 </td>
                                        <td>100 </td>
                                    </tr>
                                    <tr>
                                        <td>400 </td>
                                        <td>700 </td>
                                        <td>5 </td>
                                    </tr>
                                    <tr>
                                        <td>500 </td>
                                        <td>900 </td>
                                        <td>40 </td>
                                    </tr>
                                    <tr>
                                        <td>800 </td>
                                        <td>1200 </td>
                                        <td>24 </td>
                                    </tr>
                                    <tr>
                                        <td>1100 </td>
                                        <td>1500 </td>
                                        <td>18 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Bepaling debiet verse lucht via rechtstreekse debietmetingen</h2>
                        <p>
                            De Qmech-debieten dienen minstens bepaald te worden in de maximale stand en eventueel ook bij andere
                            regelstanden.
                        </p>
                        <p>
                            Raming van het debiet aan verse lucht op basis van gemeten CO2- concentraties Als men niet over de nodige
                            meetapparatuur voor debietmetingen beschikt en/ of indien het niet evident is om de debieten te meten (grote
                            ruimten …), kan er op basis van de CO2-concentratie in een stationair regime een inschatting gemaakt worden van
                            het mechanische-ventilatiedebiet Qmech. Het is wel belangrijk dat de ramen en deuren gesloten zijn tijdens de
                            meetperiode.
                        </p>
                        <p>Indien de CO2-concentratie min of meer gestabiliseerd is bij bezetting, kan men het</p>
                        <p>mechanische-ventilatiedebiet inschatten.</p>
                        <p>Voor rustige activiteiten is het mechanische-ventilatiedebiet</p>
                        <p>Qmech = 20.000 * N/(CO2,binnen -CO2,buiten) (m³/h), waarbij N het aantal aanwezigen is.</p>
                        <p>
                            Deze formule geldt voor personen met een rustige activiteit (1,2 MET). Onderstaande tabel geeft voor het gemeten
                            CO2-verschil tussen binnen en buiten het overeenkomstige ventilatiedebiet per persoon. De nominale bezetting van
                            de ruimte is dan gelijk aan het aantal aanwezigen N tijdens de meting, vermenigvuldigd met de factor uit de
                            tabel 2.
                        </p>

                        <div className={classes.table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            CO<sub>2,binnen</sub>-CO <sub>2,buitten</sub>
                                        </th>
                                        <th>
                                            m<sup>3</sup>/h
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>300 </td>
                                        <td>67 </td>
                                    </tr>
                                    <tr>
                                        <td>400 </td>
                                        <td>50 </td>
                                    </tr>
                                    <tr>
                                        <td>500 </td>
                                        <td>40 </td>
                                    </tr>
                                    <tr>
                                        <td>600 </td>
                                        <td>33 </td>
                                    </tr>
                                    <tr>
                                        <td>700 </td>
                                        <td>29 </td>
                                    </tr>
                                    <tr>
                                        <td>800 </td>
                                        <td>25 </td>
                                    </tr>
                                    <tr>
                                        <td>900 </td>
                                        <td>22 </td>
                                    </tr>
                                    <tr>
                                        <td>1000 </td>
                                        <td>20 </td>
                                    </tr>
                                    <tr>
                                        <td>1100 </td>
                                        <td>18 </td>
                                    </tr>
                                    <tr>
                                        <td>1200 </td>
                                        <td>17 </td>
                                    </tr>
                                    <tr>
                                        <td>1300 </td>
                                        <td>15 </td>
                                    </tr>
                                    <tr>
                                        <td>1400 </td>
                                        <td>14 </td>
                                    </tr>
                                    <tr>
                                        <td>1500 </td>
                                        <td>13 </td>
                                    </tr>
                                    <tr>
                                        <td>1600 </td>
                                        <td>13 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>Belangrijke aandachtspunten en randvoorwaarden:</p>
                        <p>
                            - een voldoende precieze Qmech-debietbepaling is alleen mogelijk indien het verschil in CO2- concentratie groter
                            is dan 300 ppm{" "}
                        </p>
                        <p>
                            - het is nodig om de evolutie van de CO2-concentratie regelmatig of voortdurend te monitoren, om te kunnen
                            vaststellen of men effectief een stationair regime bereikt heeft. Indien er geen stationair regime bereikt
                            wordt, kan deze methode NIET toegepast worden
                        </p>
                        <p>- het is belangrijk dat de analyse uitgevoerd wordt door een persoon met de nodige ervaring</p>
                        <p>
                            - indien men de keuze heeft tussen een rechtstreekse debietmeting (STAP 3.2) of een debietbepaling op basis van
                            een CO2-meting (STAP 3.3), is de rechtstreekse debietmeting te verkiezen.
                        </p>
                    </div>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>Ramen en deuren openhouden</h2>
                        <p>
                            Als men geen indicaties heeft over de ventilatie van de ruimte (geen debietmetingen bij mechanische ventilatie
                            en geen meting van de CO2-concentraties), zijn de volgende stappen van cruciaal belang:
                        </p>
                        <p>
                            - maximaal inzetten op het openen van ramen en/of deuren en indien er mechanische ventilatie beschikbaar is,
                            deze op de maximale stand zetten
                        </p>
                        <p>- het beperken van de bezetting, waarbij de volgende vuistregel gehanteerd kan worden:</p>
                        <h2>o maximaal 4 personen per m² netto-opening van ramen</h2>
                        <h2>o maximaal 6 personen per m² netto-opening van buitendeuren</h2>
                    </div>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>Bepalen van de nominale bezettingsgraad bij open ramen en buitendeuren</h2>
                        <p>
                            Indien er geen informatie over de mechanische-ventilatiedebieten of over de CO2- concentraties beschikbaar is,
                            mag men alleen rekenen op de ventilatie door het openen van ramen en/of buitendeuren.{" "}
                        </p>
                        <p>
                            Het ventilatiedebiet is functie van vele parameters, zoals o.a. de windsnelheid, de binnen- en
                            buitentemperaturen, de grootte en de positie van deze openingen …
                        </p>
                        <p>
                            In het kader van dit document is een inschatting gemaakt op basis van de Europese norm EN 15242 waarbij de
                            volgende aannames gehanteerd worden:
                        </p>
                        <p>- het temperatuurverschil tussen binnen en buiten bedraagt 3 °C</p>
                        <p>- het is windstil weer</p>
                        <p>
                            - elk raam op zich wordt geëvalueerd in de veronderstelling van dat alle openingen zich in dezelfde gevel
                            bevinden.
                        </p>
                        <p>De volgende formule kan dan gebruikt worden:</p>
                        <p>Debiet (m³/h) = Qopen= 1800 *Aopen *(0,0035 * Hopen* (Tbinnen - Tbuiten))0,5 met Tbinnen</p>
                        <p>-Tbuiten = 3°C.</p>
                        <p>Debiet (m³/h)= Qopen = 184 * Aopen * Hopen 0,5.</p>
                        <p>De overeenstemmende nominale bezetting voor een rustige activiteit (1,2 MET) is:</p>
                        <p>N900 = N900,formule = 4,6 * Aopen * Hopen 0,5.</p>
                        <p>De volgende eenvoudige vuistregel kan gebruikt worden:</p>
                        <p>- geopende ramen: N900,vuistregel = 4 * Aopen (dit komt overeen met een openingshoogte van 75 cm)</p>
                        <p>
                            - geopende deuren: N900,vuistregel = 6 * Aopen (dit komt overeen met een openingshoogte van ongeveer 2 meter).
                        </p>
                    </div>

                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>Symbolen, eenheden en definities</h2>
                        <ul>
                            <li>
                                N900: nominale bezettingsgraad die permanent aangehouden kan worden indien de streefwaarde voor de
                                CO2-concentratie 900 ppm bedraagt (500 ppm boven de buitenconcentratie)
                            </li>
                            <li>
                                N1200: nominale bezettingsgraad in het kader van de codex over het welzijn op het werk in situaties waar de
                                limietwaarde 1.200 ppm bedraagt
                            </li>
                            <li>Neff: effectieve bezettingsgraad van de ruimte</li>
                            <li>Neff: effectieve bezettingsgraad van de ruimte</li>
                            <li>Aopen: de netto-oppervlakte van de openingen tussen de ruimte en de buitenomgeving [m²]</li>
                            <li> klassiek opengaande ramen: lengte * breedte</li>
                            <li>kipramen, klapramen …: netto-afmetingen van de openingen</li>
                            <li>indien insectengaas: slechts 50 % van de oppervlakte in rekening brengen</li>
                            <li>openingen met lamellen: productgegevens gebruiken</li>
                            <li>Hopen: de nettohoogte van het opengaande deel van een raam of opening [m]</li>
                            <li>MET: indicator met betrekking tot de metabolische activiteit (Metabool Equivalent)</li>
                            <li>Rustige activiteit: een activiteit die overeenstemt met een MET-waarde van 1,2</li>
                            <li>
                                Natuurlijke ventilatie: alle vormen van ventilatie die geen gebruikmaken van mechanische ventilatie
                                (infiltratie, ventilatieroosters, opengaande ramen en deuren)
                            </li>
                            <li>Permanente CO2-metingen: er gebeurt altijd een continue CO2-meting in de ruimte</li>
                            <li>
                                Steekproefsgewijze CO2-metingen: er wordt slechts gedurende bepaalde perioden een CO2-meting uitgevoerd. Dit
                                kan zowel gaan om korte perioden voor ogenblikkelijke metingen of om metingen gedurende één of meerdere
                                dagen.
                            </li>
                            <li>
                                CADR: Clean Air Delivery Rate van een toestel voor luchtzuivering. De CADR geeft voor een bepaalde polluent
                                (meestal fijnstof) het debiet aan gezuiverde lucht weer dat het toestel inblaast. Dit komt overeen met het
                                debiet aan buitenlucht (in m³/h) dat nodig zou zijn om dezelfde hoeveelheid polluenten af te voeren als het
                                luchtzuiveringstoestel.
                            </li>
                        </ul>
                        <div className={classes.shortDiv}>
                            <h2>
                                <a
                                    style={{ color: "#000", textAlign: "Left" }}
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://werk.belgie.be/sites/default/files/content/documents/Coronavirus/
                                Implementatieplan_ventilatie.pdf"
                                >
                                    SOURCE: https://werk.belgie.be/sites/default/files/content/documents/Coronavirus/
                                    Implementatieplan_ventilatie.pdf
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h1>
                            Basis voor het streven naar zoveel mogelijke luchtwisselingen per uur (ACH) van buitenluchtventilatie +
                            draagbare luchtreiniger
                        </h1>
                        <p>1. Bijvoorbeeld het doel is in totaal 5 luchtwisselingen per uur</p>
                        <p>
                            2. 5 luchtwisselingen per uur betekent dat de lucht binnen gemiddeld 5 keer per uur wordt uitgewisseld met
                            schone lucht
                        </p>
                        <p>3. En het duurt (1/5) * 60 * 3 = 36 minuten om de lucht volledig van vervuiling te ontdoen</p>
                        <p>4. De ontwerpnorm voor minimale ventilatie in klaslokalen is ongeveer 3 ACH (zie hieronder)</p>
                        <p>
                            5. De effecten van ventilatie en luchtreiniging zijn additief (bijv. Ventilatie van 3 ACH + luchtreiniging van 2
                            ACH = 5 ACH)
                        </p>
                        <p>
                            6. U kunt meerdere luchtreinigers aan een kamer toevoegen om een hogere ACH te bereiken (als u bijvoorbeeld twee
                            apparaten installeert, elk met 2 ACH, is dit gelijk aan 4 ACH in totaal){" "}
                        </p>
                    </div>
                    <div className={classes.moreInfoDialogSubSection}>
                        <h2>Vb: DOEL IS TEN MINSTE 5 TOTALE LUCHTVERANDERINGEN PER UUR</h2>
                        <div className={classes.moreInfoColorDesc}>
                            <div className={classes.moreInfoColorSubDesc}>
                                <span></span>
                                <h3>Ideal (6 ACH)</h3>
                            </div>
                            <div className={classes.moreInfoColorSubDesc}>
                                <span></span>
                                <h3>Excellent (5-6 ACH)</h3>
                            </div>
                            <div className={classes.moreInfoColorSubDesc}>
                                <span></span>
                                <h3>Good (4-5 ACH)</h3>
                            </div>
                            <div className={classes.moreInfoColorSubDesc}>
                                <span></span>
                                <h3>Bare minimum (3-4 ACH)</h3>
                            </div>
                            <div className={classes.moreInfoColorSubDesc}>
                                <span></span>
                                <h3> {"Low (< 3 ACH)"} </h3>
                            </div>
                        </div>
                    </div>
                    <div className={classes.shortDiv}>
                        <div className={classes.moreInfoDialogSubSection}>
                            <h2>HOEVEEL BUITENLUCHT VENTILATIE HEEFT U?</h2>
                            <div className={classes.moreInfoDialogSubSectionHeading}>
                                <h3>Hoe is de ventilatie in mijn onderneming?</h3>
                                <h3>Voorbeeld scholen</h3>
                            </div>
                            <div className={classes.moreInfoDesc}>
                                <div className={classes.moreInfoColorSubDesc}>
                                    <h3> Good ventilation </h3>
                                    <h3> 3 ACH </h3>
                                    <h3>
                                        Dit is de geschatte minimale luchtverversingssnelheid waarvoor scholen zouden moeten worden
                                        ontworpen, maar de meeste niet bereiken
                                    </h3>
                                </div>
                                <div className={classes.moreInfoColorSubDesc}>
                                    <h3> Enhanced ventilation </h3>
                                    <h3> 4 ACH </h3>
                                    <h3>
                                        Selecteer dit alleen als uw school het heeft gemaakt verbeteringen die verder gaan dan code-minima
                                    </h3>
                                </div>
                                <div className={classes.moreInfoColorSubDesc}>
                                    <h3> Typical school </h3>
                                    <h3> 1.5 ACH </h3>
                                    <h3>Dit is een geschatte gemiddelde luchtwisselkoers op veel scholen op basis van onderzoeksstudies</h3>
                                </div>
                                <div className={classes.moreInfoColorSubDesc}>
                                    <h3> Low ventilation </h3>
                                    <h3> 1 ACH </h3>
                                    <h3>
                                        Selecteer deze optie als uw school slecht geventileerd is of je weet het niet zeker (ter referentie,
                                        een typisch huis in de VS is 0,5 ACH)
                                    </h3>
                                </div>
                            </div>
                        </div>
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
        <div className={classes.v2FormScreen2}>
            <h1>Wat is je huidige ventilatie debiet?</h1>
            <h2>Toevoer van buitenlucht ventilatie</h2>
            <div className={classes.ventilationBar}>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    min={0}
                    step={100}
                    max={5000}
                    value={m3Rate}
                    onChange={(e, value) => setM3Rate(value)}
                />
            </div>
            <div className={classes.v2FormScreen2Counts}>
                <h2>0 m3/h</h2>
                <h2>5000 m3/h</h2>
            </div>
            <div className={classes.rate}>
                <p>{m3Rate} m3/h</p>
            </div>

            <div className={classes.v2FormScreen2CountsResult}>
                <p>
                    Aantal personen die u van veilige lucht voorziet op basis van <span> {standard?.text} </span>
                </p>
                <div className={classes.v2FormScreen2CountsData}>
                    <p>{people1} personen</p>
                </div>
            </div>

            <div className={classes.v2FormScreen2Bottom}>
                <div className={classes.v2FormScreen2BottomLeft}>
                    <h3>Berekende ACH</h3>
                    <p>
                        <b>{ACH_Formula(m3Rate).toFixed(1)} ACH:</b> luchtwisselingen per uur betekent dat de lucht binnen gemiddeld.
                    </p>
                    <p>
                        <b>{ACH_Formula(m3Rate).toFixed(1)}</b> gemiddeld per uur wordt ververst met schone lucht
                    </p>
                </div>

                <div className={classes.tag}>
                    <p>{ACH_Formula(m3Rate).toFixed(1)} ACH</p>
                </div>
            </div>
            {/* <div className={classes.v2FormScreen2CountsResult}>
                <p>vloeroppervlak m2</p>
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
                <p>plafondhoogte</p>
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
            </div> */}

            {/* <p>2.2 ACH qemmidelde van een spartschool</p> */}
            <div className={classes.formScreen8Footer}>
                <IconButton className={classes.screen4Button} onClick={handleNext}>
                    <img src={ArrowImg} alt="" />
                </IconButton>
                <Button
                    style={{ height: "50px" }}
                    onClick={() => setOpen(true)}
                    className={classes.formScreen8Btn}
                    endIcon={<img src={OptionsImg} alt="" />}
                >
                    lees hier meer over ACH en ventilatie debiet
                </Button>
            </div>
            {moreInfo}
        </div>
    );
};

export default Screen10;
