import '../styles/Card.css';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";

export default function CardFacingRight({title, text, image, colorOfButton}) {
    return (
        <div>
            <Fade direction="left">
                <Card>
                    <Row>
                        <Col>
                            <img className="pic" src={image} alt={title}/>
                        </Col>
                        <Col style={{alignSelf: "flex-end"}}>
                            <Button style={{backgroundColor: colorOfButton}}/>
                        </Col>
                    </Row>
                    <p className="text-right">{text}</p>
                    <h3 className="title-right">{title}</h3>
                </Card>
            </Fade>
        </div>
    )
}