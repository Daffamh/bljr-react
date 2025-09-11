export {ExAttributes, CamelCaseAtt, StyleAtt};

// Expressions as Attributes
function ExAttributes() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
} // Hello World

//camelCase Event Attributes
function CamelCaseAtt() {
  const myfunc = () => {
    alert('Muasz Muaszzzzz');
  };
  return (
    // <button onClick={myfunc}>Click me</button>
    // Boolean Attributes
    <button onClick={myfunc} disabled>Click me</button>
    // <button onClick={myfunc} disabled={true}>Click me</button>
    // <button onClick={myfunc} disabled={false}>Click me</button>
    );
}

// The style Attribute
function StyleAtt() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}