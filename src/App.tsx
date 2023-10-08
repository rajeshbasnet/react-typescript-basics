import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { User } from "./components/User";

enum StatusEnum {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Dianna",
    },
  ];

  function logMessage() {
    console.log("Testing event props...");
  }

  return (
    <>
      <Greet name="Rajesh" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={StatusEnum.LOADING} statusEnum={StatusEnum} />
      <Status status={StatusEnum.SUCCESS} statusEnum={StatusEnum} />
      <Status status={StatusEnum.ERROR} statusEnum={StatusEnum} />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={true} />

      {/**Event Props **/}
      <Button handleClick={logMessage} />
      <User />
    </>
  );
}

export default App;
