import './App.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import KittyIcon from "./KittyIcon";
import flippityFish from './images/flippity-fish.jpg';
import katzenKissen from './images/katzenkissen.jpg';
import katzenburg from './images/katzenburg.jpg';
import katzenBadewanne from './images/katzen-badewanne.jpg';

export default function App() {
    return (
        <div className="container vh-100 d-flex align-items-center">
            {/*Heftiger Header mit viel bling bling*/}
            <h1 className="text-center">Hellooo</h1>

            {/*Für unsere Produkte - immer mit Text(innen) und Bild(aussen)*/}
            <div data-aos="zoom-out-left">
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
            </div>

            <div data-aos="zoom-out-left">
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
            <KittyIcon/>
            {/*3 Katzenköpfe(svg) mit Text "wow" und Sterne-Augen tanzen am Ende (mit Musik / mit Musiknoten)*/}

        </div>
    );
}
