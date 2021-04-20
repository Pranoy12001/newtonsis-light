import React, { Fragment } from "react"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const AddCourse = ()=> {
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input 
                        type="text" 
                        placeholder="Enter here" 
                        name="courseId"
                        id="courseId"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input 
                        type="text" 
                        placeholder="Enter here" 
                        name="courseTitle"
                        id="courseTitle"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">description</Label>
                    <Input 
                        type="textarea" 
                        placeholder="Enter here" 
                        name="description"
                        id="description"
                        style={{height:150}}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;