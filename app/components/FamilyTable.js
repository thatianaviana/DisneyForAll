import React from 'react';

require('./FamilyTable.css');


const Families = props => (
    <tr>
      <td>{props.fullName}</td>
      <td>{props.houseHoldIncome}</td>
      <td>{props.aboutFamily}</td>
      {/* <td>{props.family.date.substring(0,10)}</td> */}
      {/* <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td> */}
    </tr>
  )

  export default Families