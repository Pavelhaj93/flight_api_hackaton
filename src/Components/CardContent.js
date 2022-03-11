import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const CardContent = ({dada}) => {
    return (
        <Card style={{ width: '18rem', height:'19rem', border:'5px solid black', boxShadow:'5px 10px rgb(150, 134, 134)', borderRadius:'5px'}} className="karta">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
        <Card.Title style={{textShadow: '1px 1px 1px grey', fontSize:'24px', marginBottom:'35px'}}>{dada.cityTo}</Card.Title>
        <Card.Text>
                
                {
                    <>
                        <p><strong>Flight From:</strong> {dada.flyFrom}</p>
                        <p><strong>Flight To:</strong> {dada.flyTo}</p>
                        <p><strong>Flight Duration:</strong> {dada.fly_duration}</p>                    
                    </>
                }
            
        </Card.Text>
        <Button style={{marginTop:'40px',borderRadius:'5px', boxShadow:' 0 1px 0 3px rgb(84, 126, 255)' }} className="btn"variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

// flyFrom: "PRG"
// flyTo: "CRL"
// fly_duration: "1h 25m"



export default CardContent;