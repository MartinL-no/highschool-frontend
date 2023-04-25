import { Form } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SuggestTimes({ subjects }) {

  if (subjects == null) {
    return <div>Loading...</div>
  }
  
  // eslint-disable-next-line react/prop-types
  const subjectOptions = subjects.map(s => <option key={s.name} value={s.name}/>)

  return (
    <>
      <Form method="get" action="/api/" className="booking-forms">
      <p>
        <span>Suggest Times</span>
        <input
          list="subjects"
          name="subject"
        />
        <datalist id="subjects">
          {subjectOptions}
        </datalist>
        <button type="submit">Show</button>
      </p>

      <p></p>
    </Form>
    </>
  )
}