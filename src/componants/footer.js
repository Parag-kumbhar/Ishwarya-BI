import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import Logo from '../assets/ishwaryaLogo.gif';
import './footer.css';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="custom-footer-bg text-black p-4">
                    <Col className="mx-5">
                        <Stack className="align-items-center">
                            <Image src={Logo} rounded width={150} height={150} />
                            {/* Social Media Icons */}
                            <div className="mt-3 d-flex custom-icon-container">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 facebook-icon">
                                    <i className="fa-brands fa-facebook fa-2x"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 twitter-icon">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 youtube-icon">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 linkedin-icon">
                                    <i className="fab fa-linkedin-in fa-2x"></i>
                                </a>
                            </div>

                        </Stack>
                    </Col>
                    <Col>
                        <h4>Quick Links</h4>
                        <p className="text-black">Management</p>
                        <p className="text-black">Programme</p>
                        <p className="text-black">IT Programme</p>
                        <p className="text-black">About Us</p>
                        <p className="text-black">Enquiry</p>
                        <p className="text-black">Contact Us</p>
                    </Col>
                    <Col>
                        <h4>Services</h4>
                        <p className="text-black">Consulting & Coaching</p>
                        <p className="text-black">Training and Competency Development</p>
                        <p className="text-black">Digital Software Platform</p>
                    </Col>
                    <Col>
                        <h4>Profile</h4>
                        <p className="text-black">About Ishwarya</p>
                        <p className="text-black">Ishwarya Group</p>
                        <p className="text-black">Ishwarya Leadership Team</p>
                        <p className="text-black">Client List</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;