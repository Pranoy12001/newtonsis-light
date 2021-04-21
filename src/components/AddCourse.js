import React, { Fragment, useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
    useEffect(()=>{
        document.title = "Add Course"
    },[]);

    const [course, setCourse] = useState({});

    const handleForm = (e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    const postDataToServer = (course)=>{
        axios.post(`${base_url}/courses`, course).then(
            (respone)=>{
                console.log(respone.data);
                console.log("success");
                toast.success("Course data added successfully", {
                    position: "bottom-center"
                });
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong", {
                    position: "bottom-center"
                });
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="courseId"
                        id="courseId"
                        onChange={(e)=>{
                            setCourse({...course, courseId: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="courseTitle"
                        id="courseTitle"
                        onChange={(e)=>{
                            setCourse({...course, courseTitle: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Enter here"
                        name="description"
                        id="description"
                        style={{ height: 150 }}
                        onChange={(e)=>{
                            setCourse({...course, description: e.target.value})
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning ml-2" type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;