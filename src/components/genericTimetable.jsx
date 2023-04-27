/* eslint-disable react/prop-types */
export default function genericTimetable({
  timetableRows,
  rowTwoTitle,
}) {

  if (timetableRows == null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>{rowTwoTitle}</th>
            <th>Room</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
       <tbody>
          {timetableRows}
       </tbody>
      </table>
    </>
  )
}