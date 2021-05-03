import React, { Fragment, useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useLocation, useHistory } from "react-router-dom"

function ViewCourse() {
    const location = useLocation();
    const previousCourse = location.state.course;

    useEffect(() => {
        document.title = "Update Course"
    }, []);

    const [course, setCourse] = useState({
        courseId: previousCourse.courseId,
        courseTitle: previousCourse.courseTitle,
        description: previousCourse.description
    });

    const handleForm = (e) => {
        postDataToServer(course);
        e.preventDefault();
    };

    const history = useHistory();
    const postDataToServer = (course) => {
        axios.post(`${base_url}/courses`, course).then(
            (respone) => {
                toast.success("Course data added successfully", {
                    position: "bottom-center"
                });

                history.push("/view-courses");
            },
            (error) => {
                toast.error("Something went wrong", {
                    position: "bottom-center"
                });
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Update the Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input
                        type="text"
                        value={course.courseId}
                        name="courseId"
                        id="courseId"
                        readOnly
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input
                        type="text"
                        value={course.courseTitle}
                        name="courseTitle"
                        id="courseTitle"
                        onChange={(e) => {
                            setCourse({ ...course, courseTitle: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        value={course.description}
                        name="description"
                        id="description"
                        style={{ height: 150 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">Update Course</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default ViewCourse;
