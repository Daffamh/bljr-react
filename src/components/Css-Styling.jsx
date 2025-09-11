// export {Inline,JsObject,Stylesheet,Module}


// inline styling
const Inline = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

//Javascript Object
const JsObject = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// CSS Stylesheet
// import './Stylesheet.css';
// const Stylesheet = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//     </>
//   );
// }

// CSS Modules
import styles from './my-style.module.css'; 
  
const Module = () => {
  return <h1 className={styles.bigred}>Hello Car!</h1>;
}