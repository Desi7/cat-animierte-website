import './App.css';
import {Col, Row} from "react-bootstrap";
import {Bounce} from "react-awesome-reveal";
import {ReactComponent as KittyIcon} from "./images/kitty.svg";
import flippityFish from './images/flippity-fish.jpg';
import catPillow from './images/katzenkissen.jpg';
import catCastle from './images/katzenburg.jpg';
import catBathtub from './images/katzen-badewanne.jpg';
import catToilet from './images/katzen-toilette.jpg'
import Footer from "./Footer";
import CardFacingLeft from "./CardFacingLeft";
import CardFacingRight from "./CardFacingRight";

export default function App() {
    return (
        <div className="container vh-100 d-flex align-items-center">
            <h1 className="text-center">CATIFICATION</h1>
            <h4>Test</h4>

            <CardFacingRight title="Flippity Fish" text="text..." image={flippityFish} colorOfButton='#2b26c3'/>
            <CardFacingLeft title="Cat Pillow" image={catPillow} text="text..." colorOfButton='#2b26c3'/>
            <CardFacingRight title="Cat Castle" image={catCastle} text="text..." colorOfButton='#2b26c3' />
            <CardFacingLeft title="Cat bathtub" image={catBathtub} text="text..." colorOfButton='#2b26c3' />
            <CardFacingRight title="Cat toilet" image={catToilet} text="text..." colorOfButton='#2b26c3' />

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
