import { Row, Col } from "react-bootstrap";

export const FooterComponent = () => {
    return (
        <div className="custom-footer">
            <div className="container">
                <Row >
                    <Col xs={6} lg={3} className="contact-info">
                        <i className="bi bi-geo-alt" style={{ fontSize: "55px" }}></i>
                        <h5>OUR MAIN OFFICE</h5>
                        <p>ABC Street, XYZ</p>
                    </Col>
                    <Col xs={6} lg={3} className="contact-info">
                        <i className="bi bi-telephone-inbound" style={{ fontSize: "55px" }}></i>
                        <h5>CONTACT NUMBER</h5>
                        <p><a href="tel:+4733378901">+47 333 78 901</a></p>
                    </Col>
                    <Col xs={12} lg={3} className="contact-info">
                        <i className="bi bi-envelope-at" style={{ fontSize: "55px" }}></i>
                        <h5>EMAIL</h5>
                        <p><a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                    </Col>
                    <Col xs={12} lg={3}>
                        <div className="social">
                            <a href="" className="social-icon">
                            <i className="bi bi-facebook"></i>
                            </a>
                            <a href="" className="social-icon">
                            <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="" className="social-icon">
                            <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
           
           
            <hr/>
            <p>Copyright ©2023 All rights reserved</p>
        </div>
    );
}