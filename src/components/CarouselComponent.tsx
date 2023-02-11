import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/10042307/pexels-photo-10042307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1301410/pexels-photo-1301410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;