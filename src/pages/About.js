import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

function About() {
    return (
        <div>
            <p>Union Print shop, Austin Pride, blah blah blah</p>
            <p>What We Do</p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"public\images\Image-Placeholder-300px.jpg"} />
                <Card.Body>
                    <Card.Title>Stickers</Card.Title>
                    <Card.Text>
                        Vinyl Stickers, available in all shapes and sizes.
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

export default About
