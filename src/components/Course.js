import axios from "axios";
import React from "react"
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from "../api/bootapi";


const Course = ({ course, update }) => {
    const deleteCourse = (courseId) => {
        axios.delete(`${base_url}/courses/${courseId}`).then(
            response => {
                toast.success("Course deleted", {
                    position: "bottom-center"
                });
                update(courseId);
            },
            error => {
                toast.error("Something went wrong", {
                    position: "bottom-center"
                });
            }
        );
    }
    const history = useHistory();
    const routeChange = course => {
        let path = "/view-course";
        history.push({
            pathname: path,
            state: {
                course: course
            }
        });
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.courseTitle}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.courseId)
                    }}>Delete</Button>

                    <Button color="warning ml-3" onClick={() => {
                        routeChange(course)
                    }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;