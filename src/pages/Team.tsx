import { CardGroup } from "react-bootstrap";
import { CardComponentTwo } from "../components/CardComponentTwo";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const Team = () => {
    return (
        <div className="container">
            <HeadingComponent />
            <CardGroup>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </CardGroup>
            <FooterComponent />
        </div>
    );
}