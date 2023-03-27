import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";

export default function App() {
    return (
        <Container className="vh-100 d-flex justify-content-center align-items-center">
            {/*Heftiger Header mit viel bling bling*/}
            <h1 className="text-center" style={{backgroundColor: "orange"}}>Hellooo</h1>

            {/*Für unsere Produkte - immer mit Text(innen) und Bild(aussen)*/}
            <div data-aos="zoom-out"></div>
            <div data-aos="zoom-out-right"></div>
            <div data-aos="zoom-out-left"></div>
            <div data-aos="zoom-out-right"></div>
            <div data-aos="zoom-out-left"></div>
            <div data-aos="zoom-out-right"></div>
            <div data-aos="zoom-out-left"></div>

            {/*3 Katzenköpfe(svg) mit Text "wow" und Sterne-Augen tanzen am Ende (mit Musik / mit Musiknoten)*/}

        </Container>
    );
}
