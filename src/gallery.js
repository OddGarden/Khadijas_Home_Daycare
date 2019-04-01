import React, { Component } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";

export class Gallery extends Component {
    render() {
        return (
            <Container className="App">
                <Card>
                    <Row className="title">
                        <Col><Card.Img src="/img/kid.jpg" /></Col>
                        <Col><Card.Img src="/img/kid2.jpg" /></Col>
                        <Col><Card.Img src="/img/kid3.jpg" /></Col>
                    </Row>
                    <Row className="title">
                        <Col><Card.Img src="/img/kid4.jpg" /></Col>
                        <Col><Card.Img src="/img/kid2.jpg" /></Col>
                        <Col><Card.Img src="/img/kid3.jpg" /></Col>
                    </Row>
                    <Row className="title">
                        <Col><Card.Img src="/img/kid3.jpg" /></Col>
                        <Col><Card.Img src="/img/kid2.jpg" /></Col>
                        <Col><Card.Img src="/img/kid.jpg" /></Col>
                    </Row>
                    <Row className="title">
                        <Col><Card.Img src="/img/kid4.jpg" /></Col>
                        <Col><Card.Img src="/img/kid.jpg" /></Col>
                        <Col><Card.Img src="/img/kid3.jpg" /></Col>
                    </Row>
                    <Row className="title">
                        <Col><Card.Img src="/img/kid3.jpg" /></Col>
                        <Col><Card.Img src="/img/kid2.jpg" /></Col>
                        <Col><Card.Img src="/img/kid4.jpg" /></Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}