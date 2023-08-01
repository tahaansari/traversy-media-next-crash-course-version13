const { NextResponse } = require("next/server");
import Course from "@/app/components/Course";
import Courses from "../data.json";

uuidv3;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredQuery = Courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  console.log(filteredQuery);
  return NextResponse.json(filteredQuery);
}

export async function POST(request) {
  const postData = await request.json();
  Courses.push(postData);
  return NextResponse.json(Courses);
}
