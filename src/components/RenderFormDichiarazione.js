import React, { useState, useEffect, useMemo } from 'react'
import { Row, Col, Form, FormGroup, FormInput, Card, CardBody, FormRadio, Button, FormCheckbox, FormSelect } from "shards-react";
import '../css/formDichiarazione_style.css';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


export default function RenderFormDichiarazione() {
    const [fullName, setFullname] = useState("")
    const [birthData, setBirthData] = useState("")
    const [birthPlace, setBirthPlace] = useState("")
    const [livePlace, setLivePlace] = useState("")
    const [liveAddress, setLiveAdress] = useState("")
    const [domPlace, setDomPlace] = useState("")
    const [domAddress, setDomAddress] = useState("")
    const [docType, setDoctype] = useState("Carta di identità")
    const [docNumber, setDocNumber] = useState("")
    const [docReleasedBy, setDocReleasedBy] = useState("")
    const [docReleasedDate, setDocReleasedDate] = useState("")
    const [reason, setReason] = useState("")
    const [motivazione, setMotivazione] = useState()
    const [addressStart, setAddressStart] = useState("")
    const [addressEnd, setAddressEnd] = useState("")

    const [saveData, setSaveData] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("")
    var userData = {
        fullName: 'fullName',
        birthData: 'birthData',
        birthPlace: '',
        livePlace: 'livePlace',
        liveAddress: 'liveAddress',
        domPlace: 'domPlace',
        domAddress: 'domAddress',
        docType: 'docType',
        docNumber: 'docNumber',
        docReleasedBy: 'docReleasedBy',
        docReleasedDate: 'sedDate',
        reason: 'reason',
        motivazione: 'motivazione',
        addressStart: 'addressStart',
        addressEnd: 'addressEnd',
        phoneNumber: 'phoneNumber'
    }



    useEffect(() => {
        userData = localStorage.getItem('userData')
        if (userData) {
            var data = JSON.parse(userData)
            setFullname(data.fullName)
            setBirthData(data.birthData)
            setBirthPlace(data.birthPlace)
            setLivePlace(data.livePlace)
            setLiveAdress(data.liveAddress)
            setDomPlace(data.domPlace)
            setDomAddress(data.domAddress)
            setDoctype(data.docType)
            setDocNumber(data.docNumber)
            setDocReleasedBy(data.docReleasedBy)
            setDocReleasedDate(data.docReleasedDate)
            setReason(data.reason)
            setMotivazione(data.motivazione)
            setAddressStart(data.addressStart)
            setAddressEnd(data.addressEnd)
            setPhoneNumber(data.phoneNumber)
        }
    }, [])

    const TestPDF = () => (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>AUTODICHIARAZIONE AI SENSI DEGLI ARTT. 46 E 47 D.P.R. N. 445/2000 </Text>
                <Text style={styles.text}>
                    Il/La sottoscritto/a _____________{fullName}______________ , nato/a il {birthData}
        _______a ______________{birthPlace}___________ (______), residente in ___________{livePlace}_____________
        (______), via ___________{liveAddress}____________ e domiciliato/a in __________{domPlace}_________
        (______), via ___________{domAddress}_____________, identificato/a a mezzo ________{docType}_______________
        nr. ______{docNumber}______________, rilasciato da ______________{docReleasedBy}__________________
        in data ____{docReleasedDate}_____ , utenza telefonica _____{phoneNumber}______ , consapevole delle conseguenze penali
                    previste in caso di dichiarazioni mendaci a pubblico ufficiale (art. 495 c.p.)
{/* 
Il/La sottoscritto/a {fullName} , nato/a il {birthData}
        a {birthPlace} (______), residente in {livePlace}
        (______), via {liveAddress} e domiciliato/a in {domPlace}
        (______), via {domAddress}, identificato/a a mezzo {docType}
        nr. {docNumber}, rilasciato da {docReleasedBy}
        in data {docReleasedDate} , utenza telefonica {phoneNumber} , consapevole delle conseguenze penali
                    previste in caso di dichiarazioni mendaci a pubblico ufficiale (art. 495 c.p.) */}
                </Text>
                <Text style={styles.title_small}>DICHIARA SOTTO LA PROPRIA RESPONSABILITA' </Text>
                <Text style={styles.text}>
                    {'->'} di essere a conoscenza delle misure normative di contenimento del contagio da COVID-19 vigenti alla
                    data odierna, concernenti le limitazioni alla possibilità di spostamento delle persone fisiche all’interno del
                    territorio nazionale;
          </Text>
                <Text style={styles.text}>
                    {'->'} di essere a conoscenza delle altre misure e limitazioni previste da ordinanze o altri provvedimenti
                    amministrativi adottati dal Presidente della Regione o dal Sindaco ai sensi delle vigenti normative;
          </Text>
                <Text style={styles.text}>
                    {'->'} di essere a conoscenza delle sanzioni previste dall’art. 4 del decreto-legge 25 marzo 2020, n. 19, e dall’art.
                    2 del decreto-legge 16 maggio 2020, n. 33;
          </Text>

                <Text style={styles.text}>
                    {'->'} che lo spostamento è determinato da:
          </Text>
                <Text style={styles.text}>
                    {motivazione === 1
                        ? "(x) comprovate esigenze lavorative;"
                        : "( ) comprovate esigenze lavorative;"
                    }

                </Text>
                <Text style={styles.text}>
                    {motivazione === 2
                        ? "(x) motivi di salute;"
                        : "( ) motivi di salute;"
                    }
                </Text>
                <Text style={styles.text}>
                    {motivazione === 3
                        ? "(x) altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri "
                        + "provvedimenti che definiscono le misure di prevenzione della diffusione del contagio;" +
                        "(specificare il motivo che determina lo spostamento)"

                        : "( ) altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri "
                        + "provvedimenti che definiscono le misure di prevenzione della diffusione del contagio;" +
                        "(specificare il motivo che determina lo spostamento)"
                    }
                </Text>
                <Text style={styles.text_small}>
                    __________{reason}_________________
                </Text>

                <Text style={styles.text} >
                    -- che lo spostamento è iniziato da (indicare l’indirizzo da cui è iniziato)
          </Text>
                <Text style={styles.text}>
                    _________________{addressStart}_________________
                </Text>
                <Text style={styles.text} >
                    -- con destinazione da (indicare l’indirizzo di destinazione)
          </Text>
                <Text style={styles.text}>
                    _________________{addressEnd}_________________
                </Text>
                <Text style={styles.text} >
                    -- in merito allo spostamento, dichiara inoltre che
          </Text>
                <Text style={styles.text}>
                    __________{reason}__________________
          </Text>

                <Text style={styles.text} >
                    Data, ora e luogo del controllo
          </Text>
                <Text style={styles.text}>
                    Firma del dichiarante                                                                                                  L'Operatore di Polizia
          </Text>

            </Page>
        </Document>
    );


    const styles = StyleSheet.create({
        body: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Times-Roman',
            paddingBottom: 5,
            paddingTop: 5,
        },
        title_small: {
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'Times-Roman',
        },

        text: {
            margin: 10,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
        text_small: {
            marginLeft: 12,
            fontSize: 10,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },

    }
    );

    const DownloadPdf = () => {
        return useMemo(
            () => (
                <PDFDownloadLink document={<TestPDF />} fileName="Autodichiarazione.pdf">
                    {({ loading }) => (loading
                        ? 'loading...'
                        : <Button onClick={() => {
                            if (saveData) {
                                userData = {
                                    fullName: fullName,
                                    birthData: birthData,
                                    birthPlace: birthPlace,
                                    livePlace: livePlace,
                                    liveAddress: liveAddress,
                                    domPlace: domPlace,
                                    domAddress: domAddress,
                                    docType: docType,
                                    docNumber: docNumber,
                                    docReleasedBy: docReleasedBy,
                                    docReleasedDate: docReleasedDate,
                                    reason: reason,
                                    motivazione: motivazione,
                                    addressStart: addressStart,
                                    addressEnd: addressEnd,
                                    phoneNumber: phoneNumber
                                }
                                localStorage.setItem('userData', JSON.stringify(userData))
                            } else {
                                localStorage.clear()
                            }
                        }} target="_blank">Genera</Button>)}
                </PDFDownloadLink>
            ),
            [],
        )
    }

    return (
        < Row style={{ marginTop: "10px" }}>
            <Col sm="12" style={{ textAlign: "justify" }}>
                <Card>
                    <CardBody>
                        <h4>I tuoi dati anagrafici</h4>
                        <hr />
                        <Form action={DownloadPdf()} data-netlify="true">
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Il tuo nome e cognome</label>
                                        <FormInput type="text" value={fullName} onChange={(e) => setFullname(e.target.value)} required placeholder="Mario Rossi" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Numero di telefono</label>
                                        <FormInput type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder="" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">La tua data di nascita</label>
                                        <FormInput required value={birthData} onChange={(e) => setBirthData(e.target.value)} type="date" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Luogo di Nascita</label>
                                        <FormInput required value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Città di residenza</label>
                                        <FormInput required value={livePlace} onChange={(e) => setLivePlace(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Indirizzo residenza</label>
                                        <FormInput required value={liveAddress} onChange={(e) => setLiveAdress(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Città di domicilio</label>
                                        <FormInput required value={domPlace} onChange={(e) => setDomPlace(e.target.value)} requiredtype="text" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Indirizzo domicilio</label>
                                        <FormInput required value={domAddress} onChange={(e) => setDomAddress(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row><br />
                            <h5>Documento</h5>
                            <hr />
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Tipo di documento</label>
                                        <FormSelect required value={docType} onChange={(e) => setDoctype(e.target.value)} type="text"   >
                                            <option value="Carta di identità">Carta di identità</option>
                                            <option value="Patente di guida">Patente di guida</option>
                                            <option value="Passaporto">Passaporto</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Numero documento</label>
                                        <FormInput required value={docNumber} onChange={(e) => setDocNumber(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Rilasciato da</label>
                                        <FormInput required value={docReleasedBy} onChange={(e) => setDocReleasedBy(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Data rilascio</label>
                                        <FormInput required value={docReleasedDate} onChange={(e) => setDocReleasedDate(e.target.value)} type="date" />
                                    </FormGroup>
                                </Col>
                            </Row><br />
                            <h4>Origine e Destinazione</h4>
                            <hr />
                            <Row>
                                <Col sm="12" md="12" lg="6">
                                    <FormGroup>
                                        <label>Indirizzo da cui è iniziato lo spostamento</label>
                                        <FormInput required value={addressStart} onChange={(e) => setAddressStart(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="12" lg="6">
                                    <FormGroup>
                                        <label>Indirizzo di destinazione dello spostamento</label>
                                        <FormInput required value={addressEnd} onChange={(e) => setAddressEnd(e.target.value)} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row><br /><br />

                            <h4>Motivazione dello Spostamento</h4>
                            <p>Lo spostamento è determinato da</p>
                            <hr />
                            <FormGroup>
                                <FormRadio name="motivazione" checked={motivazione === 1} onChange={() => setMotivazione(1)} >
                                    comprovate esigenze lavorative
                  </FormRadio>
                                <FormRadio name="motivazione" checked={motivazione === 2} onChange={() => setMotivazione(2)} >
                                    motivi di salute
                  </FormRadio>
                                <FormRadio name="motivazione" checked={motivazione === 3} onChange={() => setMotivazione(3)}>
                                    altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri
                                    provvedimenti che definiscono le misure di prevenzione della diffusione del contagio;
                                    (specificare)
                  </FormRadio>
                                {motivazione === 3
                                    ? <FormInput required value={reason} onChange={(e) => setReason(e.target.value)} type="text" />
                                    : ""
                                }
                            </FormGroup>
                            <br />
                            <hr />
                            <Row>
                                <Col sm="12">
                                    <FormCheckbox checked={saveData} onChange={(e) => { setSaveData(e.target.value) }}>Salva le info sul dispositivo per la prossima volta</FormCheckbox>
                                    <div>
                                        <DownloadPdf />
                                    </div>

                                </Col>
                            </Row><br />
                            <Row>
                                <Col>
                                    <p style={{ color: "Red" }}>* I dati inseriti non vengono memorizzati ne trasmessi ad alcuno.<br />
        *Ogni dato inserito resta esclusivamente sul vostro dispositivo e il documento PDF viene generato dal dispositivo stesso.</p>
                                </Col>
                            </Row>

                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    )


}

