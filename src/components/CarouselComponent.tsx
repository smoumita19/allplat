import Carousel from 'react-bootstrap/Carousel';
import { ButtonComponentPrimary } from './ButtonComponentPrimary';

function CarouselComponent() {
  return (
    <Carousel variant="light" className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/357440/pexels-photo-357440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="900"
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>Something caption</h6>
          <h1>ALLPLAT</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste numquam sapiente quas repellendus labore veritatis, dolorum ea. Accusamus at qui rem culpa! Eaque vitae perferendis aut nemo vel pariatur.</p>
          
          <ButtonComponentPrimary />
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="900"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h6>Something caption</h6>
          <h1>ALLPLAT</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste numquam sapiente quas repellendus labore veritatis, dolorum ea. Accusamus at qui rem culpa! Eaque vitae perferendis aut nemo vel pariatur.</p>
          
          <ButtonComponentPrimary />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1301410/pexels-photo-1301410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="900"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6>Something caption</h6>
          <h1>ALLPLAT</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste numquam sapiente quas repellendus labore veritatis, dolorum ea. Accusamus at qui rem culpa! Eaque vitae perferendis aut nemo vel pariatur.</p>
          
          <ButtonComponentPrimary />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;