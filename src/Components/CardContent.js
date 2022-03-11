import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



const CardContent = ({dada}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
        <Card.Title>{dada.cityTo}</Card.Title>
        <Card.Text>
                <strong>Bags Price:</strong>
                {
                dada.bags_price.map((item, index) => {
                    return <p>
                                {item}
                            </p>
                })
                }
            
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardContent;