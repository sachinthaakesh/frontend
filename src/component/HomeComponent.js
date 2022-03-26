import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,
    CardFooter} from 'reactstrap';
    import { Link } from 'react-router-dom';

/*function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}*/

function Guest(){
    return(
        <Card>
            <Link to='/menu'>
            <CardImg src={'./public/assets/images/home.JPG'} />
            </Link>
        </Card>
    );
        
}

function Signin(){
    return(
        <Card>
            
            
            <CardBody>
            <cardText>
            A well-run restaurant is like a winning baseball team.
            It makes the most of every crew member's talent and takes advantage of every split-second opportunity to speed up service.
            </cardText>
            
            <CardFooter>David Ogilvy</CardFooter>
            </CardBody>
            
        </Card>
    );
        
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Guest/>
                </div>
                <div className="col-12 col-md m-1">
                <Signin/>
                </div>
            </div>
        </div>
    );
}

export default Home;

//<RenderCard item={props.dish} />
