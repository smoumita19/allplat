import { Row, Col } from 'react-bootstrap';
import { CardComponent } from '../components/CardComponent';
import CarouselComponent from '../components/CarouselComponent';
import { FooterComponent } from '../components/FooterComponent';
import { HeadingComponent } from '../components/HeadingComponent';


export const Home = () => {
    return (
        <div>
               <div className="container">
               <CarouselComponent />
             
                {/* Section one */}
                <HeadingComponent />

                <Row className="justify-content-md-center">
                    <Col xs="5" className="text-right" >
                        <h5>Heading five</h5>
                        <h2>Heading two</h2>
                        {/* <hr/> */}
                        <p className="text-justify" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.

                        </p>
                    
                    </Col>
                    <Col xs="5" >
                        <img data-aos="fade-up" width="100%" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                </Row>

                {/* Section two */}
                <HeadingComponent />

                <Row className="justify-content-md-center">
                    <Col xs="5" >
                        <img data-aos="fade-up" width="100%" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col xs="5" >
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

                <HeadingComponent />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nulla aspernatur dolor, eum facere placeat? Cumque suscipit dignissimos perferendis corporis, dolorum, sunt dolor deleniti tenetur ipsa quibusdam atque laboriosam fuga?

                    </div>
                </div>

                <HeadingComponent />
                <Row>
                    <Col xs="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
                    <Col xs="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
                    <Col xs="4">
                        <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </Col>
                </Row>

                <FooterComponent/>
                </div>
        </div>
    );
}