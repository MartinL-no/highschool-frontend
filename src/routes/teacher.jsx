import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import teachersService from "../services/teachers";
import ProfileCard from "../components/profileCard";

export default function Teacher() {
  const { teacherName } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    async function getStudent() {
      const teacher = await teachersService.getOne(teacherName)      
      setTeacher(teacher)
    }
    getStudent()
  }, []);

  if (teacher == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teacher-page">
      <h1>{teacher.name}</h1>
        <ProfileCard 
          key={teacher.name} 
          schoolMember={teacher}
          readOnly
        />
    </div>
  );
}