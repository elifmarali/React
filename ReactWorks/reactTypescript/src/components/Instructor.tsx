import { instructorDataTypes } from "./propsTypes";
function Instructor(props: instructorDataTypes) {
  return (
    <div>
      {props.employeeFirstLastName.firstName}
      <br />
      {props.employeeFirstLastName.lastName}
    </div>
  );
}

export default Instructor;
