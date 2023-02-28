import { Row, Col } from "react-bootstrap";
import { ButtonComponentSecondary } from "../components/ButtonComponentSecondary";
import { CardComponent } from "../components/CardComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const AboutUs = () => {
    return (
        <div className="container">
            <HeadingComponent heading={"About Us"}/>
            <p className="text-justify" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem quas eaque perspiciatis soluta necessitatibus repellendus aliquid dolor, tenetur eum est provident, neque qui dolores possimus, rem inventore et dicta?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit est non labore dolore unde qui, et quod, debitis neque provident excepturi cupiditate. Molestiae fugit adipisci earum iste provident ipsa voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate itaque necessitatibus temporibus reiciendis ex doloribus animi modi deleniti, expedita pariatur, minima accusamus, deserunt tempora nisi quidem est quod libero.
            </p>
            <Row className="">
                    <Col md="4" >
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} animationDelay={"50"}/>
                    </Col>
                    <Col md="4" >
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} animationDelay={"250"}/>
                    </Col>
                    <Col md="4" >
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} animationDelay={"450"}/>
                    </Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                    <Col md="6" >
                        <img width="100%" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col md="6" className="custom-col-context my-2 m-md-0">
                        <h5>Heading five</h5>
                        <h2>Heading two</h2>
                        {/* <hr/> */}
                        <p className="text-justify" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.

                        </p>
                        <ButtonComponentSecondary />
                    </Col>
                   
            </Row>

       

            

            <FooterComponent />

        </div>
    );
}