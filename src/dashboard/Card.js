import Card from 'react-bootstrap/Card';
import Star from "../images/star";
import Starfill from "../images/starfill";
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

function ModuleCard({ className = '', title, value, onClick }) {
    
    return (
        <Card className="card" bg="primary" text="white" onClick={onClick} style={{ cursor: "pointer",  }}>
        <Card.Body  className="cardbody">
            <Card.Title className="cardtitle">{title}</Card.Title>
            {value>0 && <Starfill/>}{value<=0 && <Star/>}
            {value>1 && <Starfill/>}{value<=1 && <Star/>}
            {value>2 && <Starfill/>}{value<=2 && <Star/>}
            {value>3 && <Starfill/>}{value<=3 && <Star/>}
            {value>4 && <Starfill/>}{value<=4 && <Star/>}
            {value>5 && <Starfill/>}{value<=5 && <Star/>}
            {value>6 && <Starfill/>}{value<=6 && <Star/>}
            {value>7 && <Starfill/>}{value<=7 && <Star/>}
            {value>8 && <Starfill/>}{value<=8 && <Star/>}
            {value>9 && <Starfill/>}{value<=9 && <Star/>}           
        </Card.Body>
        </Card>
    );
}

export default ModuleCard;