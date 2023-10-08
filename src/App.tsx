import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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

  return (
    <>
      <Greet name="Rajesh" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={StatusEnum.LOADING} statusEnum={StatusEnum} />
      <Status status={StatusEnum.SUCCESS} statusEnum={StatusEnum} />
      <Status status={StatusEnum.ERROR} statusEnum={StatusEnum} />
    </>
  );
}

export default App;
