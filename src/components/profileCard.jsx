/* eslint-disable react/prop-types */
import { useState } from "react";
import ProfileCardForm from "./profileCardForm";

export default function ProfileCard({ schoolMember, readOnly }) {

  if (schoolMember == null) {
    return <div>Loading...</div>
  }

  const firstName = schoolMember.name
  const lastName = ""
  const avatar = schoolMember.profilePicture
  const twitter = "Linked-In"
  const subjects =  schoolMember.subjects.join(", ")

  return (
    <div id="contact">
      <div>
        <img
          key={avatar}
          src={avatar || null}
        />
      </div>

      <div>
        <h1>
          {firstName || lastName ? (
            <>
              {firstName} {/*student.last*/}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite />
        </h1>

        {twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${twitter}`} rel="noreferrer"
            >
              {twitter}
            </a>
          </p>
        )}

        {subjects && <p>{subjects}</p>}

        {!readOnly && <ProfileCardForm student={schoolMember} />}

      </div>
    </div>
  );
}

function Favorite() {
  const [favorite, setFavorite] = useState(true);

  const changeFav = (e) => {
    e.preventDefault();
    setFavorite(prevState => !prevState)
  }
  return (
    <form onSubmit={changeFav}>
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
    </form>
  );
}