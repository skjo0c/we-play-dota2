import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardComponent = ({ title, children }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card.Title>Card Title</Card.Title>
          </Col>
          <Col xs={12} md={8}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
);

export default CardComponent;
