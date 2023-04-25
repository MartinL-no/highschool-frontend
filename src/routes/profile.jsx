import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import studentsService from "../services/students";

export default function Profile() {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    studentsService.getOne("Geir")
      .then((s) => {
        setStudent({
          first: s.name,
          last: "Name",
          avatar: s.profilePicture,
          twitter: "Linked-In",
          notes: "Some notes",
          favorite: true,
        });
    })
  }, []);

  if (student == null) {
    return <div>Loading...</div>;
  }

  return (
    <div id="contact">
      <div>
        <img
          key={student.avatar}
          src={student.avatar || null}
        />
      </div>

      <div>
        <h1>
          {student.first || student.last ? (
            <>
              {student.first} {/*student.last*/}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite student={student} />
        </h1>

        {student.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${student.twitter}`} rel="noreferrer"
            >
              {student.twitter}
            </a>
          </p>
        )}

        {student.notes && <p>{student.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ student }) {
  // yes, this is a `let` for later
  let favorite = student.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}