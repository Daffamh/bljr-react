import styles from './Button.module.css';
import styles from './BlueHeader.module.css';

export {Modules,Multiple,Composing,Global}

//Using a CSS Module
function Modules(){
    return(
        <div>
            <button className={styles.mybutton}>
                My Button
            </button>
        </div>
    )
}

//Multiple Classes
function Multiple(){
    return(
        <div>
            <button className={`${styles.mybutton} ${styles.primary}`}>
                My Primary Button
            </button>
            <br />
            <br />
            <button classname={`${styles.mybutton} ${styles.secondary}`}>
                My Secondary Button
            </button>
        </div>
    )
}

// Composing Classes
function Composing() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <br/>
      <br/>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}

// Global Classes
function Global() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
    </div>
  );
}

//Combine Global and Local Classes
// :global(.myheader) {
//   padding: 10px 20px;
//   font-size: 50px;
//   color: white;
//   background-color: dodgerblue;
// }

// .myparagraph {
//   font-size: 20px;
//   color: white;
//   background-color: purple;
// }

// import styles from './MyStyles.module.css';

// function App() {
//   return (
//     <div>
//       <h1 className="myheader">
//         My Header
//       </h1>
//       <p className={styles.myparagraph}>
//         My Paragraph
//       </p>
//     </div>
//   );
// }



