import React, { useEffect, useState } from "react"
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios"
import { toast } from "react-toastify";

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Courses"
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Course data has been loaded", {
                    position: "bottom-center"
                });
                setCourses(response.data)
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong", {
                    position: "bottom-center"
                });
            }
        );
    }

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([
        
    ]);

    const updateCourse = (courseId)=>{
        setCourses(courses.filter(c => c.courseId != courseId));
    }

    return (
        <div className="text-center">
            <h1>All Courses</h1>
            <p>
                List of courses are given bellow
            </p>
            {
                courses.length > 0
                    ? courses.map(course => <Course course={course} update={updateCourse}/>)
                    : "No Courses Available"
            }
        </div>
    );
}

export default AllCourses;