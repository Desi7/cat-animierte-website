import './App.css';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Fade, Zoom} from "react-reveal";
import KittyIcon from "./KittyIcon";
import flippityFish from './images/flippity-fish.jpg';
import katzenKissen from './images/katzenkissen.jpg';
import katzenburg from './images/katzenburg.jpg';
import katzenBadewanne from './images/katzen-badewanne.jpg';
import katzenToilette from './images/katzen-toilette.jpg';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function App() {

    return (
        <div className="container vh-100 d-flex align-items-center">
            <h1 className="text-center">CATIFICATION</h1>

            <div>
                <Fade left>
                    <Card>
                        <p className="text-right">text....</p>
                        <Row>
                            <Col>
                                <img className="pic" src={flippityFish} alt="Flippity Fish"></img>
                            </Col>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                        </Row>
                        <h3>Flippity Fish</h3>
                    </Card>
                </Fade>
            </div>

            <div>
                <Fade right>
                    <Card>
                        <Row>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                            <Col>
                                <img alt="katzen-kissen" src={katzenKissen} className="pic"></img>
                            </Col>
                        </Row>
                        <h3>Katzenkissen</h3>
                        <p className="text-left">text....</p>
                    </Card>
                </Fade>
            </div>

            <div>
                <Fade left>
                    <Card>
                        <p className="text-right">text....</p>
                        <Row>
                            <Col>
                                <img className="pic" src={katzenburg} alt="Katzenburg"></img>
                            </Col>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                        </Row>
                        <h3>Katzenburg</h3>
                    </Card>
                </Fade>
            </div>

            <div>
                <Fade right>
                    <Card>
                        <p className="text-left">text....</p>
                        <Row>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                            <Col>
                                <img className="pic" src={katzenBadewanne} alt="Katzenburg"></img>
                            </Col>
                        </Row>
                        <h3>Badewanne</h3>
                    </Card>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <Card>
                        <p className="text-right">text....</p>
                        <Row>
                            <Col>
                                <img className="pic" src={katzenToilette} alt="Katzentoilette"></img>
                            </Col>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                        </Row>
                        <h3>Katzentoilette</h3>
                    </Card>
                </Fade>
            </div>
            <Zoom top>
                <Row>
                    <Col>
                        <KittyIcon/>
                    </Col>
                    <Col>
                        <KittyIcon/>
                    </Col>
                    <Col>
                        <KittyIcon/>
                    </Col>
                </Row>
            </Zoom>
        </div>
    );
}
