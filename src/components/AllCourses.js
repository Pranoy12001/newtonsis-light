import React, { useState } from "react"
import Course from "./Course";

const AllCourses=()=> {
    const [courses, setCourses] = useState([
        {title:"Java core", description:"Java core tutorial for beginner"},
        {title:"Spring", description:"Spring tutorial for beginner"},
        {title:"React JS", description:"React JS tutorial for beginner"}
    ]);
    return(
        <div className="text-center">
            <h1>All Courses</h1>
            <p>
                List of courses are given bellow
            </p>
            {
                courses.length > 0 
                ? courses.map(course => <Course course={course}/>)
                : "No Courses Available"
            }
        </div>
    );
}

export default AllCourses;