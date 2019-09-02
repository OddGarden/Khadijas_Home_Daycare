import React, { Component } from 'react';
import { Container, Row, Card } from "react-bootstrap";

export const Heading = props => <Row className="title"><h1>{props.msg}</h1></Row>

export class Home extends Component {
    render() {
        return (
            <Container className="App">

                <Heading msg="Welcome to Khadija Home Daycare!" />
                <p>
                    We strive to provide every child with a loving, safe, fun, stimulating and
                    structured learning environment. Our hope is that this will that every child
                    that comes through our doors will leave excited to engage with the outside world.
                </p>

                <p>
                    We opened our home to provide child care for those who would like an alternative to
                    childcare centers. We are a state licensed home and have been open for the past 10 years.
                    We do have regular compliance checks and strive to take additional courses to better
                    ourselves and in turn are better prepared to take care of every child brought under our care.
                 </p>
                <p>

                    <img id="cert" src="/img/EarlyAchiever.png"></img>

                </p>
                <p>
                    We are proud to be Early Achievers as we strongly belive in the quality of
                   early care and learning.  We work hard to ensure that we can provided high-quality
                   child care and early learning programs that fit our kids. Out goal is to ensure
                   our children have high-quality early learning experiences that help
                   them develop the skills they need to be successful in school and life. In addtion, we do offer
                   a few added services as follows:

                   <ul>
                        <li>Fleible payment options (DSHS and private pay accepted)</li>
                        <li>Transportation to and from local schools</li>
                        <li>Nutritious meals and snacks</li>
                        <li>24/7, 7days a week availablility</li>
                        <li>Fun and loving environment</li>
                    </ul>
                </p>


                <p>
                    We encourage you to call us with any questions or to schedule a tour. Our contact information
                    is listed below:
                 </p>
                 <p className="contact"  >ADDRESS: 5730 S 144th Street Tukwila WA 98168</p>
                 <p className="contact" >PHONE NUMBER: 206-588-0248</p>
                 <p className="contact" >EMAIL: smilaan@yahoo.com </p>

       



            </Container >
        )
    }
}