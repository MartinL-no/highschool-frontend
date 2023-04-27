import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import studentsService from "../services/students";
import ProfileCard from "../components/profileCard";

export default function Student() {
  const { studentName } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function getStudent() {
      const student = await studentsService.getOne(studentName)      
        setStudent(student)
    }
    getStudent()
  }, []);

  if (student == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="student-page">
      <h1>{student.name}</h1>
        <ProfileCard 
          key={student.name} 
          schoolMember={student}
          readOnly
        />
    </div>
  );
}