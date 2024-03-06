type instructorListType = {
  employeeFirstLastNameList: {
    firstName: string;
    lastName: string;
  }[];
};
function InstructorList(props: instructorListType) {
  return (
    <div>
      {props.employeeFirstLastNameList.map((item, index) => {
        return (
          <div key={index}>
            {item.firstName} {item.lastName}
          </div>
        );
      })}
    </div>
  );
}

export default InstructorList;
