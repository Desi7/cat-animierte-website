import './App.css';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Bounce, Fade} from "react-awesome-reveal";
import {ReactComponent as KittyIcon} from "./images/kitty.svg";
import flippityFish from './images/flippity-fish.jpg';
import katzenKissen from './images/katzenkissen.jpg';
import katzenburg from './images/katzenburg.jpg';
import katzenBadewanne from './images/katzen-badewanne.jpg';
import katzenToilette from './images/katzen-toilette.jpg'
import Footer from "./Footer";

export default function App() {
    return (
        <div className="container vh-100 d-flex align-items-center">
            <h1 className="text-center">CATIFICATION</h1>
            <h4>Test</h4>

            <div>
                <Fade direction="left">
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
                        <h3 className="title-right">Flippity Fish</h3>
                    </Card>
                </Fade>
            </div>

            <div>
                <Fade direction="right">
                    <Card>
                        <Row style={{flexDirection: 'row-reverse'}}>
                            <Col>
                                <img alt="katzen-kissen" src={katzenKissen} className="pic"></img>
                            </Col>
                            <Col style={{alignSelf: "flex-end"}}>
                                <span>hover here</span>
                                <Button disabled={true} style={{backgroundColor: '#2b26c3'}}></Button>
                            </Col>
                        </Row>
                        <h3 className="title-left">Cat pillow</h3>
                        <p className="text-left">text....</p>
                    </Card>
                </Fade>
            </div>

            <div>
                <Fade direction="left">
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
                        <h3 className="title-right">Cat castle</h3>
                    </Card>
                </Fade>
            </div>

            <div>
                <Card>
                    <p className="text-left">text....</p>
                    <Row style={{flexDirection: 'row-reverse'}}>
                        <Col>
                            <img className="pic" src={katzenBadewanne} alt="Katzenburg"/>
                        </Col>
                        <Col style={{alignSelf: "flex-end"}}>
                            <span>hover here</span>
                            <Button disabled={true} style={{backgroundColor: '#2b26c3'}}/>
                        </Col>
                    </Row>
                    <h3 className="title-left">Cat bathtub</h3>
                </Card>
            </div>
            <div>
                <Fade direction="left">
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
                        <h3 className="title-right">Cat toilet</h3>
                    </Card>
                </Fade>
            </div>
            <Bounce>
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
            </Bounce>

            <Footer/>
        </div>
    );
}
