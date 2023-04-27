import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import classesService from "../services/classes";
import studentsService from "../services/students";
import ProfileCard from "../components/profileCard";

export default function Class() {
  const { className } = useParams();
  const [_class, setClass] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function getAll() {
      const classResponse = await classesService.getOne(className)
      const studentNames = classResponse.students
      const studentsResponse = await studentsService.getAll()
      const students = studentsResponse
        .filter(s => studentNames.includes(s.name))
      
      setClass(classResponse)
      setStudents(students)
    }
    getAll()
  }, []);

  if (students == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="class-page">
      <h1>{_class.name}</h1>
      {students.map(student => 
        <ProfileCard 
          key={student.name} 
          schoolMember={student}
          readOnly
        />)}
    </div>
  );
}