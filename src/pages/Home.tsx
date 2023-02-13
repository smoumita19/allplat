import { CardComponent } from '../components/CardComponent';
import CarouselComponent from '../components/CarouselComponent';


export const Home = () => {
    return (
        <div>
               <CarouselComponent />
               <div className="container">
                <div className="row">
                    <div className="col-sm">
                     <CardComponent fontClass={''} cardText={''} />
                    </div>
                    <div className="col-sm">
                    <CardComponent fontClass={''} cardText={''} />

                    </div>
                    <div className="col-sm">
                    <CardComponent fontClass={''} cardText={''} />
                    </div>
                </div>
                </div>
        </div>
    );
}