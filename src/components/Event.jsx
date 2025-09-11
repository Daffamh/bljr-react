export {Example, Passing,Goal};

function Example() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
} // Great Shot!

// Passing Arguments
function Passing() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

// React Event Object
function Goal(){
    const shoot = (a,b) => {
        alert(b.type)
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
    }

    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    )
}

{/* <button onClick={shoot}>Take the Shot!</button> */}