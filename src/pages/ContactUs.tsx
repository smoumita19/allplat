import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { ButtonComponentPrimary } from "../components/ButtonComponentPrimary";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const ContactUs = () => {
    return (
        <div className="custom-contact-us">
            <div className="parallax pt-2">
                <div className="container mt-4"  data-aos="fade-up">
                <Row className="justify-content-md-center"  >
                    <Col md="4" style={{ backgroundColor: "white", padding: "20px"}}>
                    <HeadingComponent heading={"Contact Us"}/>

                    <Form className="custom-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter your name" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter your valid email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            {/* <Form.Label>Your message!</Form.Label> */}
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message!" style={{resize: "none"}} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                        <ButtonComponentPrimary />
                    </Form>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="parallax"></div>
            <FooterComponent />

        </div>
    );
}