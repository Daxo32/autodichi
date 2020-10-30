import React, { useState, useEffect, useMemo } from 'react'
import { Row, Col, Form, FormGroup, FormInput, Card, CardBody, FormRadio, Button, FormCheckbox, FormSelect, Alert } from "shards-react";
import '../css/formDichiarazione_style.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import LayoutPDF from './LayoutPDF'

export default function RenderFormDichiarazione() {
    //Dichiaro gli Hook delle info
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
    const [motivazione, setMotivazione] = useState(1)
    const [addressStart, setAddressStart] = useState("")
    const [addressEnd, setAddressEnd] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    //Hook per localstorage
    const [saveData, setSaveData] = useState(false)




    var userData = { //oggetto, lo uso per salvare nel localStorage se richiesto
        fullName: '',
        birthData: '',
        birthPlace: '',
        livePlace: '',
        liveAddress: '',
        domPlace: '',
        domAddress: '',
        docType: '',
        docNumber: '',
        docReleasedBy: '',
        docReleasedDate: '',
        reason: '',
        motivazione: '',
        addressStart: '',
        addressEnd: '',
        phoneNumber: ''
    }



    useEffect(() => {
        userData = localStorage.getItem('userData')
        if (userData) { //Se trovo dati salvati nel localStorage li carico
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

    const DownloadPdf = () => { //Genero il pdf usando la lib dedicata
        return useMemo(
            () => (
                <PDFDownloadLink
                    document={<LayoutPDF
                        p_fullName={fullName}
                        p_birthData={birthData}
                        p_birthPlace={birthPlace}
                        p_livePlace={livePlace}
                        p_liveAddress={liveAddress}
                        p_domPlace={domPlace}
                        p_domAddress={domAddress}
                        p_docType={docType}
                        p_docNumber={docNumber}
                        p_docReleasedBy={docReleasedBy}
                        p_docReleasedDate={docReleasedDate}
                        p_reason={reason}
                        p_motivazione={motivazione}
                        p_addressStart={addressStart}
                        p_addressEnd={addressEnd}
                        p_phoneNumber={phoneNumber}
                    />}
                    fileName="Autodichiarazione.pdf">
                    {({ loading }) => (loading
                        ? 'loading...'
                        : <Button onClick={() => {
                            if (saveData) { //se l'utente vuole salvare i dati, li salvo in localstorage
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
            <Col sm="12">
                <Card>
                    <CardBody>
                        <h4>I tuoi dati anagrafici</h4>
                        <hr />
                        <Form action={DownloadPdf()} data-netlify="true">
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Il tuo nome e cognome</label>
                                        <FormInput type="text" defaultValue={fullName} onBlur={(e) => setFullname(e.target.value)} required placeholder="Mario Rossi" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Numero di telefono</label>
                                        <FormInput type="tel" defaultValue={phoneNumber} onBlur={(e) => setPhoneNumber(e.target.value)} required placeholder="34* *******" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">La tua data di nascita</label>
                                        <FormInput required defaultValue={birthData} onBlur={(e) => setBirthData(e.target.value)} type="date" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Luogo di Nascita</label>
                                        <FormInput required defaultValue={birthPlace} onBlur={(e) => setBirthPlace(e.target.value)} type="text" placeholder="Città" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Città di residenza</label>
                                        <FormInput required defaultValue={livePlace} onBlur={(e) => setLivePlace(e.target.value)} type="text" placeholder="Città" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Indirizzo residenza</label>
                                        <FormInput required defaultValue={liveAddress} onBlur={(e) => setLiveAdress(e.target.value)} type="text" placeholder="Indirizzo" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Città di domicilio</label>
                                        <FormInput required defaultValue={domPlace} onBlur={(e) => setDomPlace(e.target.value)} requiredtype="text" placeholder="Città" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Indirizzo domicilio</label>
                                        <FormInput required defaultValue={domAddress} onBlur={(e) => setDomAddress(e.target.value)} type="text" placeholder="Indirizzo" />
                                    </FormGroup>
                                </Col>
                            </Row><br />
                            <h5>Documento</h5>
                            <hr />
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Tipo di documento</label>
                                        <FormSelect required defaultValue={docType} onBlur={(e) => setDoctype(e.target.value)} type="text"   >
                                            <option value="Carta di identità">Carta di identità</option>
                                            <option value="Patente di guida">Patente di guida</option>
                                            <option value="Passaporto">Passaporto</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Numero documento</label>
                                        <FormInput required defaultValue={docNumber} onBlur={(e) => setDocNumber(e.target.value)} type="text" placeholder="..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Rilasciato da</label>
                                        <FormInput required defaultValue={docReleasedBy} onBlur={(e) => setDocReleasedBy(e.target.value)} type="text" placeholder="..." />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label className="formTitle">Data rilascio</label>
                                        <FormInput required defaultValue={docReleasedDate} onBlur={(e) => setDocReleasedDate(e.target.value)} type="date" />
                                    </FormGroup>
                                </Col>
                            </Row><br />
                            <h4>Origine e Destinazione</h4>
                            <hr />
                            <Row>
                                <Col sm="12" md="12" lg="6">
                                    <FormGroup>
                                        <label>Indirizzo da cui è iniziato lo spostamento 🛫</label>
                                        <FormInput required defaultValue={addressStart} onBlur={(e) => setAddressStart(e.target.value)} type="text" placeholder="Indirizzo partenza" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="12" lg="6">
                                    <FormGroup>
                                        <label>Indirizzo di destinazione dello spostamento 🛬 </label>
                                        <FormInput required defaultValue={addressEnd} onBlur={(e) => setAddressEnd(e.target.value)} type="text" placeholder="Indirizzo destinazione" />
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
                                    ? <FormInput required defaultValue={reason} onBlur={(e) => setReason(e.target.value)} type="text" />
                                    : ""
                                }
                            </FormGroup>
                            <br />
                            <hr />
                            <Row>
                                <Col sm="12">
                                    <Alert theme="light"><b>Attenzione!</b> È necessario stampare e firmare il modulo! 🖨</Alert>
                                    <FormCheckbox checked={saveData} onChange={(e) => { setSaveData(!saveData) }}>Salva le info sul dispositivo per la prossima volta</FormCheckbox>
                                    <div>
                                        <DownloadPdf />
                                    </div>

                                </Col>
                            </Row><br />
                            <Row>
                                <Col>
                                    <p style={{ color: "Red" }}>* I dati inseriti non vengono memorizzati né trasmessi ad alcuno. <br />
        * Ogni dato inserito resta esclusivamente sul vostro dispositivo e il documento PDF viene generato dal dispositivo stesso. <br />
        * Codice sorgente disponibile al seguente <a href="https://github.com/Daxo32/autodichi">LINK</a></p>

                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    )
}

