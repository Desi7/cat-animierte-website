import '../styles/Card.css';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";

export default function CardFacingLeft({title, text, image, colorOfButton, price}) {
    return (
        <div>
            <Fade direction="right">
                <Card>
                    <Row style={{flexDirection: 'row-reverse'}}>
                        <Col>
                            <img className="pic" alt={title} src={image}/>
                        </Col>
                        <Col style={{alignSelf: "flex-end"}}>
                            <Button style={{backgroundColor: colorOfButton}}/>
                        </Col>
                    </Row>
                    <h3 className="title-left">{title}</h3>
                    <p className="text-left">{text}</p>
                    <p className="price text-left">Price: {price} Fr.</p>
                </Card>
            </Fade>
        </div>
    )
}