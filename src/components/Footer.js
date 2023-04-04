import {MDBCol, MDBContainer, MDBFooter, MDBRow} from 'mdb-react-ui-kit';

export default function Footer() {

    return (<div style={{width: "114.5%"}}>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            {/*fancy bild*/}
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
                                    <a href='#!' className='text-dark'
                                       style={{backgroundColor: "#9cfcf8", borderRadius: "5px"}}>
                                        Link 1
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
                            {/*fancy bild*/}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className='text-center p-3' style={{backgroundColor: "lightgray"}}>
                    <link></link>
                    <p className='text-black'>© 2023 Copyright:<br/> Desi7/cat-animierte-website</p>
                </div>
            </MDBFooter>
            {/*MDBFooter from https://mdbootstrap.com/docs/react/navigation/footer/#subsection-icons*/}
        </div>);
}
