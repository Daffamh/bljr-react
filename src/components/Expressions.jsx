export {Expressions,Variable,Call,Property};


function Expressions() { 
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
} // My car It has 296.48 horsepower


// Variable
function Variable() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
} // My car It has 296.48 horsepower


// Function Call
function kwtohp(kw) {
  return kw * 1.36;
}
function Call() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
} // My car It has 296.48 horsepower


//Object Property
function Property() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
} // My car is a white Fiat 500
