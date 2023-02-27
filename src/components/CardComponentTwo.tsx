import { CardGroup, Card } from "react-bootstrap";

type CardComponentTwoProps = {
    imgSrc ?: string;
    cardTitle ?: string; 
    cardText ?: string;
    cardFooter ?: string;
    animationDelay ?: string;

}

export const CardComponentTwo = (props : CardComponentTwoProps) => {
    return (
        // <CardGroup>
        <Card className="p-2 m-2 custom-card-2" data-aos="fade-up" data-aos-delay={props.animationDelay}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Text>
                {props.cardText}              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.cardFooter}</small>
          </Card.Footer>
        </Card>
    //   </CardGroup>
    );
}