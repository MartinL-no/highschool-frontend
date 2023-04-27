import { useEffect, useState } from "react";

import studentsService from "../services/students";
import ProfileCard from "../components/profileCard";

export default function Students() {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    studentsService.getAll()
      .then((s) => setStudents(s))
  }, []);

  if (students == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="students-page">
      <h1>Students</h1>
      {students.map(student => 
        <ProfileCard 
          key={student.name} 
          schoolMember={student}
          readOnly
        />)}
    </div>
  );
}