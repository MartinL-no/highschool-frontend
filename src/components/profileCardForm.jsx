/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";

export default function ProfileCardForm({ student }) {

  if (student == null) {
    return <div>Loading...</div>;
  }

  return (
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
  );
}