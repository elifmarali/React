import "./App.css";
import ContextExample from "./components/ContextExample";
import EventChangeClick from "./components/EventChangeClick";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExample from "./components/ReducerExample";
import RefExample from "./components/RefExample";
import Request from "./components/Request";
import ThemeProvider from "./components/ThemeContext";

function App() {
  const employee = {
    firstName: "Elif",
    lastName: "Marali",
  };
  const employeeList = [
    {
      firstName: "Elif1",
      lastName: "Marali1",
    },
    {
      firstName: "Elif2",
      lastName: "Marali2",
    },
    {
      firstName: "Elif3",
      lastName: "Marali3",
    },
    {
      firstName: "Elif4",
      lastName: "Marali4",
    },
  ];
  return (
    <>
      <Home
        name="Elif"
        surname="Marali"
        age={22}
        school="Dogus University"
        department="Software Engineering"
        isBest={true}
      />
      <Instructor employeeFirstLastName={employee} />
      <InstructorList employeeFirstLastNameList={employeeList} />
      <Request status="success" />
      <EventChangeClick />
      <LoginCheck />
      <ReducerExample />

      <ThemeProvider>
        <ContextExample></ContextExample>
      </ThemeProvider>

      <RefExample></RefExample>
    </>
  );
}

export default App;
