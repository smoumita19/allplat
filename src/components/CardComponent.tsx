import { Card, Button } from "react-bootstrap";

type CardComponentProps = {
    fontClass : string;
    cardText : string;
}

export const CardComponent = (props : CardComponentProps) => {
    return (
        <Card className="custom-card">
        <Card.Body>
            <Card.Title><i className={props.fontClass}></i></Card.Title>
            <Card.Text>
            {props.cardText}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}