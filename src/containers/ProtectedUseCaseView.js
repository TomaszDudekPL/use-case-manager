import React from 'react';
import {Grid, Row, Col, Button, ButtonGroup} from 'react-bootstrap'
import SimpleSlider from '../components/Slider'




const ProtectedUseCaseView = () => {


    return (
        <Grid>
            <div>
                <div className="flex flex-center pos-relative top-50">
                    <h2>Shallow List - Component: Login Form 1/20</h2>
                </div>
            </div>
            <div className="flex flx-space-between">
                <Button className="pos-relative top-50">Report</Button>
                <Button className="pos-relative top-50" bsStyle="primary">Accept</Button>
            </div>
            <Row className="pos-relative top-50">
                <Col xs={12} md={12}>
                    <SimpleSlider />
                </Col>
            </Row>
            <Row>
                <div className="pos-relative top-50">
                    <div className="flex flx-direct-row mrg10">
                        <div className="useCase__detailsDiv pdn10">
                            <h3>Details</h3>
                            O tym, że nikt nie czyta regulaminów i warunków licencyjnych – zwanych EULA – producenci
                            oprogramowania i dostawcy usług wiedzą od dawna.
                            Jedną z legend wczesnego internetu było ukrycie w licencji programu zapisu o tym, że
                            pierwsza
                            osoba, która zdzwoni na podany numer, otrzyma nagrodę w wysokości 2 000 dolarów. Kwota
                            czekała
                            na przekazanie szczęśliwcowi dobrych kilka lat. Oprócz przyjemnych niespodzianek na
                            beztroskich
                            użytkowników mogą czekać także mniej radosne odkrycia. Purple, operator otwartych hotspotów
                            działających na terenie Wielkiej Brytanii, dopisał do regulaminu łączenia się Internetem
                            poprzez
                            udostępnione Wi-Fi następujący punkt:
                        </div>
                        <div className="useCase__actionsDiv pdn10">
                            <h3>Actions</h3>
                            O tym, że nikt nie czyta regulaminów i warunków licencyjnych – zwanych EULA – producenci
                            oprogramowania i dostawcy usług wiedzą od dawna.
                            Jedną z legend wczesnego internetu było ukrycie w licencji programu zapisu o tym, że
                            pierwsza
                            osoba, która zdzwoni na podany numer, otrzyma nagrodę w wysokości 2 000 dolarów. Kwota
                            czekała
                            na przekazanie szczęśliwcowi dobrych kilka lat.
                        </div>
                    </div>
                    <div className="margin10-top">
                        <Col md={12}>
                            <div className="flex flx-space-between">
                                <Button className="">Report</Button>
                                <Button className="" bsStyle="primary">Accept</Button>
                            </div>
                            <div className="flex flex-center">
                                <ButtonGroup>
                                    <Button>PREV</Button>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                    <Button>4</Button>
                                    <Button>5</Button>
                                    <Button>NEXT</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                    </div>
                </div>
            </Row>
        </Grid>
    )
        ;
};


export default ProtectedUseCaseView;
