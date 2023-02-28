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
        <Card className="p-2 m-3 custom-card-2" data-aos="fade-up" data-aos-delay={props.animationDelay}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
                {props.cardText}              
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted text-center" style={{ textAlign: "center"}}>{props.cardFooter}</small>
          </Card.Footer> */}
        </Card>
    //   </CardGroup>
    );
}