import { Card, Button } from 'react-bootstrap'

function RestaurantCard() {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Restaurant Name</Card.Title>
            <Card.Text>
            Restaurant information snippet
            </Card.Text>
            <Button variant="primary">Order Here</Button>
        </Card.Body>
        </Card>
    )
}

export default RestaurantCard