import { useEffect, useState } from "react";

import teachersService from "../services/teachers";
import ProfileCard from "../components/profileCard";

export default function Teachers() {
  const [teachers, setTeachers] = useState(null);
  
  useEffect(() => {
    teachersService.getAll()
      .then(t => setTeachers(t))
  }, []);

  if (teachers == null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="teachers-page">
      <h1>Teachers</h1>
      {teachers.map(teacher => 
        <ProfileCard 
          key={teacher.name} 
          schoolMember={teacher}
          readOnly
        />)}
    </div>
  );
}