import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";

export const Heading = props => <Row className="title"><h1>{props.msg}</h1></Row>

export class Home extends Component {
    render() {
        return (
            <Container className="App">

                <Heading msg="Welcome to Khadija's Home Daycare!" />
                <p>
                    We strive to provide every child with a loving, safe, fun, stimulating and
                    structured learning environment. Our hope is that this will that every child
                    that comes through our doors will leave excited to engage with the outside world.
                    </p>

                <p>
                    We opened our home to provide child care for those who would like an alternative to
                    childcare centers. We are a state licensed home and have been open for the past * years.
                    We do have regular compliance checks and strive to take additional courses to better
                    ourselves and in turn are better prepared to take care of every child brought under our care.
                    </p>

            </Container >
        )
    }
}