export {Garage,Garasi}

function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      {/* Component twice */}
      <Car />
    </>
  );
}
// Whos lives in my Garage?
// I am a Car
// I am a Car


// Props
function Mobil(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garasi() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Mobil brand="Ford" />
      <Mobil brand="BMW" />
    </>
  );
} 
// Whos lives in my Garage?
// I am a ford
// I am a BMW

