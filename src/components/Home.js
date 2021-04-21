import React, { useEffect } from "react"
import { Button, Container, Jumbotron } from "reactstrap"

const Home = ()=>{
    useEffect(()=>{
        document.title = "Home"
    },[]);
    return(
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-5">Welcome Newton SIS</h1>
                <p>
                    This is a best student information system developed by Pranoy IT.
                    Easy to use the system and best user interface.
                </p>
                <Container className="text-center">
                    <Button color="primary">
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;