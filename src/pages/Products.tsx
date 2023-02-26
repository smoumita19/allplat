import { Row, Col, CardGroup } from "react-bootstrap";
import { CardComponent } from "../components/CardComponent";
import { CardComponentTwo } from "../components/CardComponentTwo";
import { FooterComponent } from "../components/FooterComponent";
import { HeadingComponent } from "../components/HeadingComponent";

export const Products = () => {
    return (
      <div className="container">
        <HeadingComponent />
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi rerum facere. Esse laborum consequuntur ullam dolores hic. Saepe molestias commodi ratione iure dolore eaque accusamus, laboriosam deleniti. Deleniti, officia. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem eligendi mollitia eos nesciunt a harum, optio, saepe eum error beatae architecto, magni pariatur voluptates cupiditate? Illo exercitationem deleniti unde!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem et sint ad molestias incidunt dolore architecto culpa laboriosam vero recusandae quas voluptatem temporibus, eligendi vitae quidem eius, veniam amet.
        </p>
        {/* <Row>  
            <Col md="6">
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Col>
            <Col md="6">
                <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Col>
        </Row> */}

        <CardGroup>
            <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <CardComponentTwo  cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates! Consectetur voluptas esse harum assumenda"} imgSrc={"https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        </CardGroup>

            
        <FooterComponent />
      </div>  
    );
}