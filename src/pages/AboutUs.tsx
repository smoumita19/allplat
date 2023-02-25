import { Row, Col } from "react-bootstrap";
import { CardComponent } from "../components/CardComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const AboutUs = () => {
    return (
        <div className="container">
            <HeadingComponent />
            <Row className="justify-content-md-center">
                    <Col md="5" >
                        <img data-aos="fade-up" width="100%" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col md="5" >
                        <h5>Heading five</h5>
                        <h2>Heading two</h2>
                        {/* <hr/> */}
                        <p className="text-justify" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.

                        </p>
                    </Col>
                   
            </Row>

            <Row>
                    <Col md="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
                    <Col md="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
                    <Col md="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
            </Row>

            

            <FooterComponent />

        </div>
    );
}