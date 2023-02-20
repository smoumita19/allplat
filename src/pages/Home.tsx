import { Row, Col } from 'react-bootstrap';
import { CardComponent } from '../components/CardComponent';
import CarouselComponent from '../components/CarouselComponent';
import { HeadingComponent } from '../components/HeadingComponent';


export const Home = () => {
    return (
        <div>
               <div className="container">
               <CarouselComponent />
               <HeadingComponent />
             
               <Row className="justify-content-md-center">
                    <Col xs="5">
                    <h5>Something</h5>
                    <h1>Someone</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae non quidem officiis sed, dolorem quaerat asperiores nobis pariatur dicta harum veritatis, accusantium provident animi magnam error, molestiae consequatur perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores maxime dolor explicabo incidunt nemo culpa quod, porro repellat odio delectus qui nisi reprehenderit esse soluta dignissimos beatae ex.
                    </Col>
                    <Col xs="5">
                    <img width="100%" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                </Row>
                <div className="row mt-4 mb-4">
                    <div className="col-4">
                     <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </div>
                    <div className="col-4">
                     <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />

                    </div>
                    <div className="col-4">
                     <CardComponent fontClass={'bi bi-back'} cardText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda'} />
                    </div>
                </div>
                </div>
        </div>
    );
}