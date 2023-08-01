import React from 'react'

const Course = async () => {
    const request = await fetch("http://localhost:3000/api/courses");
    const courses = await request.json();
  return (
    <div>
      {courses.map((course)=>{
        return <div>
            <h3>{course.title}</h3>
        </div>
      })}
    </div>
  )
}

export default Course
