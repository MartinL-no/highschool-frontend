import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */

import studentsService from "../services/students";
import ProfileCard from "../components/profileCard";

export default function Profile() {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    studentsService.getOne("Geir")
      .then((s) => {
        setStudent(s);
    })
  }, []);

  if (student == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <ProfileCard schoolMember={student} />
    </div>
  );
}