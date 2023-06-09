import './styles/App.css';
import {Col, Row} from "react-bootstrap";
import {Bounce} from "react-awesome-reveal";
import {ReactComponent as KittyIcon} from "./images/kitty.svg";
import flippityFish from './images/flippity-fish.jpg';
import catPillow from './images/katzenkissen.jpg';
import catCastle from './images/katzenburg.jpg';
import catBathtub from './images/katzen-badewanne.jpg';
import catToilet from './images/katzen-toilette.jpg'
import Footer from "./components/Footer";
import CardFacingLeft from "./components/CardFacingLeft";
import CardFacingRight from "./components/CardFacingRight";
import Sparkles from 'react-sparkle'

export default function App() {
    return (
        <div className="container vh-100 d-flex align-items-center">
            <h1 className="text-center title">CATIFICATION</h1>
            <span className="container">
            <h4 className="text-center subtitle">
                Welcome to our website dedicated to all things feline! We are a one-stop-shop for cat lovers,
                offering a wide range of high-quality cat products to help you pamper your furry friends. Whether
                you're a new cat owner or a seasoned pro, we've got you covered with everything from food and treats
                to toys and accessories. Our team of dedicated cat enthusiasts carefully curate our selection of
                products to ensure that only the very best items make it onto our virtual shelves. We believe that
                every cat deserves the very best, which is why we only stock products that are safe, healthy, and
                beneficial for your furry companions. So why not take a look around and see what we have to offer?
                <br/>We're sure you'll find something that your feline friend will love!</h4>
                <Sparkles color={'#e306f3'} overflowPx={20} minSize={18} maxSize={23} fadeOutSpeed={10}
                          flicker={false}/>
                {/*Sparkles from https://www.npmjs.com/package/react-sparkle*/}
            </span>

            <div style={{marginBottom: "150px"}}/>

            <h2>OUR PRODUCTS</h2>
            <div style={{marginBottom: "40px"}}/>

            <CardFacingRight title="Flippity Fish"
                             text="Flippity Fish: a durable, motion-activated cat toy resembling a fish. Rechargeable, detachable motor makes for easy cleaning. Loved worldwide."
                             image={flippityFish} colorOfButton='#d0001b' price="24.50"/>
            <CardFacingLeft title="Cat Pillow" image={catPillow}
                            text="A pink, fluffy cat pillow is a soft and cozy cushion designed in the shape of a cat, featuring fluffy faux fur and a cute pink color"
                            colorOfButton='#ff3403' price="15.95"/>
            <CardFacingRight title="Cat Castle" image={catCastle}
                             text="A lightweight, eco-friendly cat castle made of carton with multiple levels and tunnels for feline fun."
                             colorOfButton='#ff4f00' price="59.50"/>
            <CardFacingLeft title="Cat bathtub" image={catBathtub}
                            text="Cat bathtub: a small-sized, non-slip tub with built-in soap holders and spray nozzles designed to keep cats clean and healthy."
                            colorOfButton='#fd5800' price="35.95"/>
            <CardFacingRight title="Cat toilet" image={catToilet}
                             text="High-tech litter boxes that use sensors and self-cleaning systems to eliminate the need for daily scooping."
                             colorOfButton='#ff8c00' price="225.95"/>

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

            <h2>OUR REVIEW</h2>
            <div style={{marginBottom: "40px"}}/>

            <Row>
                <Col>
                    <div className="blockquote-wrapper">
                        <div className="blockquote">
                            <h1 className="h1-spezial">
                                Not that good ... my cat didn't want to go in the water. <br/>Wouldn't recommend!
                                <br/>I'd like my money back, but they wont give it to me >:(
                            </h1>
                            <h4 className="h4-spezial">&mdash; Karen Dobad<br/><em>Product: Cat bathtub</em><br/>
                                <em style={{color: "darkviolet", fontSize: "18px"}}>Rating 1/5</em>
                            </h4>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="blockquote-wrapper">
                        <div className="blockquote">
                            <h1 className="h1-spezial">
                                My cat went nuts! He really liked it, good product. Best money I've ever spent.
                            </h1>
                            <h4 className="h4-spezial">&mdash; Bobby Ross<br/><em>Product: Flippity Fish</em><br/>
                                <em style={{color: "darkviolet", fontSize: "18px"}}>Rating 6/5</em>
                            </h4>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="blockquote-wrapper">
                        <div className="blockquote">
                            <h1 className="h1-spezial">
                                My cat liked it very much. She used to sleep anywhere but in the basket I bought her,
                                and now she wouldn't even get up to eat!
                            </h1>
                            <h4 className="h4-spezial">&mdash; Sarah Sutter<br/><em>Product: Cat Pillow</em><br/>
                                <em style={{color: "darkviolet", fontSize: "18px"}}>Rating 4/5</em>
                            </h4>
                        </div>
                    </div>
                </Col>
            </Row>
            {/*User-Quotes-Design from https://codepen.io/jupago/pen/GPxqLX*/}

            <Footer/>
        </div>
    );
}
