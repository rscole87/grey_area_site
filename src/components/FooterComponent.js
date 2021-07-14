import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export default function Footer(){
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col sm="2">
                            <img src="" alt="" />
                        </Col>
                        <Col sm="2">
                            <ul>
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </Col>
                        <Col sm="4">
                            <address>
                                12345 Main Street St. Petersburg, FL 33700 <br />
                                (727) 555-1234 <br />
                                hello@greyareaservices.com
                            </address>
                        </Col>

                        <Col sm="4">
                            <p>Website deisgned and devloped my Marble Theory Design, LLC</p>
                            <img src="" alt="" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}