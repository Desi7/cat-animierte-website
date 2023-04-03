import '../styles/Card.css';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";

export default function CardFacingLeft({title, text, image, colorOfButton}) {
    return (
        <div>
            <Fade direction="right">
                <Card>
                    <Row style={{flexDirection: 'row-reverse'}}>
                        <Col>
                            <img alt={title} src={image} className="pic"></img>
                        </Col>
                        <Col style={{alignSelf: "flex-end"}}>
                            <span>hover here</span>
                            <Button disabled={true} style={{backgroundColor: colorOfButton}}></Button>
                        </Col>
                    </Row>
                    <h3 className="title-left">{title}</h3>
                    <p className="text-left">{text}</p>
                </Card>
            </Fade>
        </div>
    )
}