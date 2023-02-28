import { CardGroup } from "react-bootstrap";
import { CardComponentTwo } from "../components/CardComponentTwo";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const Team = () => {
    return (
        <div className="container">
            <HeadingComponent heading={"Our Team"}/>
            <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro reprehenderit voluptates magnam dolor nemo perspiciatis, amet assumenda dignissimos incidunt modi optio vel est culpa aliquam sequi officia laudantium at. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel error, nostrum natus aut consequuntur quisquam sequi, cumque neque fugit at maiores vitae voluptates dolorum a commodi nobis tenetur laboriosam aspernatur.
            </p>
            <CardGroup>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} animationDelay={"50"} cardFooter={"This is footer section of a card."}/>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} animationDelay={"250"} cardFooter={"This is footer section of a card."}/>
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} animationDelay={"450"} cardFooter={"This is footer section of a card."}/>
            </CardGroup>
            <FooterComponent />
        </div>
    );
}