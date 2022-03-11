import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const CardContent = ({dada}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
        <Card.Title>{dada.cityTo}</Card.Title>
        <Card.Text>
                
                {
                    <>
                        <p><strong>Flight From:</strong> {dada.flyFrom}</p>
                        <p><strong>Flight To:</strong> {dada.flyTo}</p>
                        <p><strong>Flight Duration:</strong> {dada.fly_duration}</p>                    
                    </>
                }
            
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

// flyFrom: "PRG"
// flyTo: "CRL"
// fly_duration: "1h 25m"



export default CardContent;