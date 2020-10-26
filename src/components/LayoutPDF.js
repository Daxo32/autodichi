import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

//Component con il layout del PDF

function RenderPDF(props) {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center',
            fontFamily: 'Times-Roman',
            paddingBottom: 20,
            paddingTop: 5,
        },
        title_small: {
            fontWeight: 700,
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'Times-Roman',
            paddingTop: 15,
        },

        text: {
            margin: 10,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman',
        },
        text_under: {
            margin: 10,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman',
            textDecoration: "underline"
        },
        text_small: {
            marginLeft: 12,
            fontSize: 10,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },

    }
    );

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>AUTODICHIARAZIONE AI SENSI DEGLI ARTT. 46 E 47 D.P.R. N. 445/2000 </Text>
                <Text style={styles.text}>
                    Il/La sottoscritto/a __{props.p_fullName}__ , nato/a il __{props.p_birthData}
        __a __{props.p_birthPlace}__ (______), residente in __{props.p_livePlace}__
        (______), via __{props.p_liveAddress}__ e domiciliato/a in __{props.p_domPlace}__
        (______), via __{props.p_domAddress}__, identificato/a a mezzo __{props.p_docType}
        __ nr. __{props.p_docNumber}__, rilasciato da __{props.p_docReleasedBy}
        __ in data __{props.p_docReleasedDate}__ , utenza telefonica __{props.p_phoneNumber}__ , consapevole delle conseguenze penali
                    previste in caso di dichiarazioni mendaci a pubblico ufficiale (art. 495 c.p.)
                </Text>
                <Text style={styles.title_small}>DICHIARA SOTTO LA PROPRIA RESPONSABILITA' </Text>
                <Text style={styles.text_under}>
                    {'-->'} di essere a conoscenza delle misure normative di contenimento del contagio da COVID-19 vigenti alla
                    data odierna, concernenti le limitazioni alla possibilità di spostamento delle persone fisiche all’interno del
                    territorio nazionale;
          </Text>
                <Text style={styles.text_under}>
                    {'-->'} di essere a conoscenza delle altre misure e limitazioni previste da ordinanze o altri provvedimenti
                    amministrativi adottati dal Presidente della Regione o dal Sindaco ai sensi delle vigenti normative;
          </Text>
                <Text style={styles.text_under}>
                    {'-->'} di essere a conoscenza delle sanzioni previste dall’art. 4 del decreto-legge 25 marzo 2020, n. 19, e dall’art.
                    2 del decreto-legge 16 maggio 2020, n. 33;
          </Text>

                <Text style={styles.text}>
                    {'-->'} che lo spostamento è determinato da:
          </Text>
                <Text style={styles.text}>
                    {props.p_motivazione === 1
                        ? "(x) comprovate esigenze lavorative;"
                        : "( ) comprovate esigenze lavorative;"
                    }

                </Text>
                <Text style={styles.text}>
                    {props.p_motivazione === 2
                        ? "(x) motivi di salute;"
                        : "( ) motivi di salute;"
                    }
                </Text>
                <Text style={styles.text}>
                    {props.p_motivazione === 3
                        ? "(x) altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri "
                        + "provvedimenti che definiscono le misure di prevenzione della diffusione del contagio;" +
                        "(specificare il motivo che determina lo spostamento)"

                        : "( ) altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri "
                        + "provvedimenti che definiscono le misure di prevenzione della diffusione del contagio;" +
                        "(specificare il motivo che determina lo spostamento)"
                    }
                </Text>
                <Text style={styles.text_small}>
                    __________{props.p_reason}_________________
                </Text>

                <Text style={styles.text} >
                    -- che lo spostamento è iniziato da (indicare l’indirizzo da cui è iniziato)
          </Text>
                <Text style={styles.text}>
                    _________________{props.p_addressStart}_________________
                </Text>
                <Text style={styles.text} >
                    -- con destinazione da (indicare l’indirizzo di destinazione)
          </Text>
                <Text style={styles.text}>
                    _________________{props.p_addressEnd}_________________
                </Text>
                <Text style={styles.text} >
                    -- in merito allo spostamento, dichiara inoltre che
          </Text>
                <Text style={styles.text}>
                    __________{props.p_reason}__________________
          </Text>

                <Text style={styles.text} >
                    Data, ora e luogo del controllo
          </Text>
                <Text style={styles.text}>
                    Firma del dichiarante                                                                                                  L'Operatore di Polizia
          </Text>

            </Page>
        </Document>
    )

}



export default RenderPDF