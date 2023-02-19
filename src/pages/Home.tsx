import { CardComponent } from '../components/CardComponent';
import CarouselComponent from '../components/CarouselComponent';
import { HeadingComponent } from '../components/HeadingComponent';


export const Home = () => {
    return (
        <div>
               <div className="container">
               <CarouselComponent />
               <HeadingComponent />
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