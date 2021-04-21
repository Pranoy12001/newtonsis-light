import axios from "axios";
import React from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({course, update})=> {
    const deleteCourse = (courseId)=>{
        axios.delete(`${base_url}/courses/${courseId}`).then(
            response => {
                toast.success("Course deleted", {
                    position: "bottom-center"
                });
                update(courseId);
            },
            error =>{
                toast.error("Something went wrong", {
                    position: "bottom-center"
                });
            }
        );
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.courseTitle}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.courseId)
                    }}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                    <Button color="success ml-3">
                        <Link>View</Link>
                    </Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;