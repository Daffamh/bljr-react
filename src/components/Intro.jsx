export { 
    introJsx,
    expresion,
    insertingBlock,
    oneTopLevelElement 
};
// Coding Jsx
const introJsx = <h1>I Love JSX!</h1>;// I Love JSX


// Expression in Jsx
const expresion = <h1>React is {5 + 5} times better with JSX</h1>;// React is 10 times better with JSX


// Inserting a Large Block of HTML
const insertingBlock = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);


// One Top Level Element
const oneTopLevelElement = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
); // I am a paragraph. I am a paragraph too.

