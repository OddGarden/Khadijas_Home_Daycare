import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";


export class Home extends Component {
    render() {
        return (
            <Container className="App">
                <Row className="title">
                    <h1 className="heading">Welcome to Khadija's Home Daycare!</h1>
                </Row>
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

                <h1 className="heading">Why do we use Lorem Ipsum?</h1>
                <p>
                    Many times, readers will get distracted by readable text when looking
                    at the layout of a page. Instead of using filler text that says “Insert
                    content here,” Lorem Ipsum uses a normal distribution of letters, making
                    it resemble standard English.
            </p>
                <p>
                    This makes it easier for designers to focus on visual elements, as
                    opposed to what the text on a page actually says.
        
            </p>
                <p>
                    Lorem Ipsum is absolutely necessary in most design cases, too.
                    Web design projects like landing pages, website redesigns and so on only
                    look as intended when they're fully-fleshed out with content. Even if the
                    design work is gorgeous, its quality won't be apparent if all of the graphic
                    elements are collapsed onto each other because there's no content in place to
                    fill them out.
            </p>

                <p>
                    Lorem Ipsum can be especially helpful for projects that involve social
                    media design, because it's virtually impossible to showcase a social media page
                    layout without any content.
            </p>
                <h1 className="heading">Where can I get Lorem Ipsum?</h1>
                <p>
                    Many variations of Lorem Ipsum exist today, and sometimes the text is altered
                    to include humorous phrases.
            </p>
                <p>
                    If you’re going to be using Lorem Ipsum as filler text on your pages, you need
                    to make sure that the passage doesn’t contain potentially embarrassing
                    information.
            </p>

                <p>
                    Using our Lorem Ipsum generator, you can easily select a variation to build your
                    desired number of Lorem Ipsum paragraphs, sentences, or words.
            </p>
                <p>
                    In addition, our generator can insert HTML markup, create HTML paragraphs, and make
                    your text bold or italic. This makes it a great option for graphic designers and
                    webmasters.
        
        
            </p>

            </Container >
        )
    }
}