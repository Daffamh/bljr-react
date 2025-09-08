import { createRoot } from "react-dom/client";
import ArrayMap from "./components/Arrow-function";
import MyList from "./components/Array-map";
import UserList from "./components/Map-with-object";
import Car from "./components/Classes";
import MyElementComponent from "./components/MyElement";
import App from "./components/Map-Parameters";
import DateInfo from "./components/Ddestructuring-Array";
import Greeting from "./components/Destructuring-props";
import Counter from "./components/Destructuring-useState-Hook";
import NomoreSpread from "./components/Spread-Operator";

createRoot(document.getElementById("root")).render(
<div>
  <>
  <MyElementComponent />,
  <Car />,
  <MyList />,
  {/* <ArrayMap />,  */}
  <UserList />,
  <App />,
  {/* <DateInfo /> */}
  <Greeting name="John" age={25} />
  <Counter />
  <NomoreSpread />
  </>
</div>
)


// Destructing Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };
// let {firstName, lastName, age} = person;
// document.getElementById("demo").innerHTML = firstName;

