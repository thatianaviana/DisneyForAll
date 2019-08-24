import React from 'react';
import CurrencyFormat from 'react-currency-format';

require('./FamilyTable.css');


const Families = props => (
    <tr>
      <td>{props.fullName}</td>
      <td> {props.houseHoldIncome}</td>
      <td>{props.aboutFamily}</td>
      <td>{props.selectedFile}</td>
      <td>
        <button id="postbutton" type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModalLong" >
                Post
            </button>
      </td>
      <td>In Progress</td>
      <td>Approved</td>
      <td> 
        <button id="deletebutton" type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModalLong" >
                Delete
            </button>
      </td>

      {/* <td>{props.family.date.substring(0,10)}</td> */}
      {/* <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td> */}
    </tr>
  )

  export default Families