import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container className=' text-primary'>
                    <Col className='py-3'>
                        <Row>
                            About
                        </Row>
                        <Row>
                            Contact
                        </Row>
                        <Row>
                            Help/Support
                        </Row>
                        <Row>
                            Privacy Notice
                        </Row>
                        <Row>
                            Icons
                        </Row>
                    </Col>
            </Container>
            
        </footer>
    )
}

export default Footer
