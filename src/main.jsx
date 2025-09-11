import { createRoot } from "react-dom/client";
import React from "react";
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
import {
   introJsx,
   expresion,
   insertingBlock,
   oneTopLevelElement
  } from "./components/Intro";
import {
  Expressions,
  Variable,
  Call,
  Property
} from "./components/Expressions";
import {
  ExAttributes,
  CamelCaseAtt,
  StyleAtt
} from "./components/Attributes";
import { 
  Fruit1,
  Fruit2 
} from "./components/If-Statements";
import {
  Garage,
  Garasi
} from "./components/react-component";
import {
  DestructuringProps,
  DestructuringRest,
  DefaultValues
} from "./components/Props-Detructuring";
import { Parent } from "./components/Props-Children";
import { 
  Example,
  Passing,
  Goal
} from "./components/Event";
import {
  Score,
  Logical,
  Gol
} from "./components/Conditional"
import {
  ReactList,
  KeyList,
  ArrayKeys
} from "./components/List"
import { 
  AddingForm,
  Controlled,
  MyForm
} from "./components/form";
import MyTxta from "./components/Textarea";
import Select from "./components/Select";
import MultiInput from "./components/Multiple-Input";
import CheckBox from "./components/Checkbox";
import Radio from "./components/Radio";
import Portal from "./components/Portal";
import Bubbling from "./components/Portal-Bubbling";
// import {Inline,JsObject,Stylesheet,Module} from "./components/Css-Styling"
import {InJs,StyledProps,Extending,GlobalCss} from "./components/Css-in-Js"
import Router from "./components/Router";
import Nested from "./components/Nested";
import Active from "./components/Active-Links";
import RoParams from "./components/RouterParams";
import SearchBar from "./components/Transition-Basic";
import TrReal from "./components/Transition-Real";
import Forward from "./components/Forwardref";

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
  {introJsx}
  {expresion}
  {insertingBlock}
  {oneTopLevelElement}
  <Expressions />
  <Variable />
  <Call />
  <Property />
  <ExAttributes />
  <CamelCaseAtt />
  <StyleAtt />
  <Fruit1 />
  <Fruit2 />
  <Garage/>
  <Garasi />
  <DestructuringProps brand="Ford" model="Mustang" color="red" year={1969} />
  <DestructuringRest brand="Ford" model="Mustang" color="red" year={1969} />
  <DefaultValues brand="Ford" />
  <Parent />
  <Example />
  <Passing />
  <Goal />
  <Score isGoal={false}/>
  <Logical brand="Ford"/>
  <Gol isGoal={true}/>
  <ReactList />
  <KeyList />
  <ArrayKeys />
  <AddingForm />
  <Controlled />
  <MyForm />
  <MyTxta />
  <Select/>
  <MultiInput />
  <CheckBox/>
  <Radio />
  <Portal/>
  <Bubbling />
  {/* <Inline />
  <JsObject />
  <Stylesheet />
  <Module /> */}
  <InJs />
  <StyledProps />
  <Extending />
  <GlobalCss />
  <Router />
  <Nested />
  <Active />
  <RoParams />
  <SearchBar />
  <TrReal />
  <Forward />
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


// Ternary Operator
// authenticated ? renderApp() : renderLogin();

