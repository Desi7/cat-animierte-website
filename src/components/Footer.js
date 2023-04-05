import '../styles/Footer.css';
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from 'mdb-react-ui-kit';

export default function Footer() {

    return (<div style={{width: "114.5%"}}>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <img src="https://www.icegif.com/wp-content/uploads/2022/07/icegif-1027.gif"
                             alt="cute-kitty-orange" width="95px" style={{borderRadius: "10px"}} className="img-kitty"/>
                        <br/>
                        <p className="hover">you can hover over me</p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'
                            style={{backgroundColor: "#6e7bfb", borderRadius: "18px"}}>Sources</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='https://www.npmjs.com/package/react-sparkle' className='text-dark'
                                   style={{backgroundColor: "#9cfcf8", borderRadius: "5px"}}>
                                    Sparkles around the Text
                                </a>
                            </li>
                            <li>
                                <a href='https://hellocode.space/en/card-hover-effect-html-css-tutorial/'
                                   className='text-dark' style={{backgroundColor: "#9cfcf8", borderRadius: "5px"}}>
                                    Card animations
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'
                            style={{backgroundColor: "#6e7bfb", borderRadius: "18px"}}>Sources</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='https://codepen.io/jupago/pen/GPxqLX' className='text-dark'
                                   style={{backgroundColor: "#9cfcf8", borderRadius: "5px"}}>
                                    User-Quotes
                                </a>
                            </li>
                            <li>
                                <a href='https://mdbootstrap.com/docs/react/navigation/footer/#subsection-icons'
                                   className='text-dark' style={{backgroundColor: "#9cfcf8", borderRadius: "5px"}}>
                                    Footer
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <img src="https://media.tenor.com/ZY20qdo9d5wAAAAM/kitten-cute.gif" alt="cute-kitty"
                             width="80px" style={{borderRadius: "10px"}} className="img-kitty"/>
                        <br/>
                        <p className="hover">you can hover over me</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{backgroundColor: "lightgray"}}>
                <p className='text-black'>© 2023 Copyright:<br/> Desi7/cat-animierte-website</p>
            </div>
        </MDBFooter>
        {/*MDBFooter from https://mdbootstrap.com/docs/react/navigation/footer/#subsection-icons*/}
    </div>);
}
