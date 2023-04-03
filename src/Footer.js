import {MDBFooter} from 'mdb-react-ui-kit';
export default function Footer() {

    return(
        <div style={{width: "100%"}}>
            <MDBFooter className='bg-light text-center text-white'>
                <div className='text-center p-3' style={{ backgroundColor: "lightgray" }}>
                    <p className='text-black'>© 2023 Copyright:<br/> Desi7/cat-animierte-website</p>
                </div>
            </MDBFooter>
        </div>
    );
}
