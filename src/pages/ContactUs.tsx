import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { HeadingComponent } from "../components/HeadingComponent";

export const ContactUs = () => {
    return (
        <div className="custom-contact-us">
            <div className="parallax">
            <HeadingComponent />
            <div >
            <Row className="justify-content-md-center" >
                <Col md="4" style={{ backgroundColor: "white", padding: "20px"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
           
            </div>

            </div>
      
            <div className="parallax"></div>

        </div>
    );
}