import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import subjectsService from "../services/subjects";
import studentsService from "../services/students";
import teachersService from "../services/teachers";
import ProfileCard from "../components/profileCard";

export default function Subject() {
  const { subjectName } = useParams();
  const [subject, setSubject] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function getAll() {
      const subjectResponse = await subjectsService.getOne(subjectName)
      const teacherResponse = await teachersService.getOne(subjectResponse.teacher)
      const studentNames = subjectResponse.students
      const studentsResponse = await studentsService.getAll()
      const students = studentsResponse
        .filter(s => studentNames.includes(s.name))
      
      setSubject(subjectResponse)
      setTeacher(teacherResponse)
      setStudents(students)
    }
    getAll()
  }, []);

  if (students == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="subject-page">
      <h1>{subject.name}</h1>

      <ProfileCard 
          schoolMember={teacher}
          readOnly
        />

      {students.map(student => 
        <ProfileCard 
          key={student.name} 
          schoolMember={student}
          readOnly
        />)}
    </div>
  );
}