import React from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ImageCap from '../imagecap.svg';


function TshirtCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageCap} />
                <Card.Body>
                    <Card.Title>TShirts</Card.Title>
                    <Card.Text>
                        Top notch torso covers.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weatherproof!</ListGroupItem>
                    <ListGroupItem>Durable!</ListGroupItem>
                    <ListGroupItem>Permanent!</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/Pricing">Pricing</Card.Link>
                    <Card.Link href="#">Order</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TshirtCard
