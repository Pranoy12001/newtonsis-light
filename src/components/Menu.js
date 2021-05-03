import React from "react"
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";


const Menu = () => {
    return (
        <ListGroup>
            <Link tag="a" className="list-group-item list-group-item-action" to="/" action>
                Home
            </Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/add-course" action>
                Add Course
            </Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/view-courses" action>
                View Course
            </Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/about" action>
                About
            </Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/contact" action>
                Contact
            </Link>
        </ListGroup>
    );
}

export default Menu;