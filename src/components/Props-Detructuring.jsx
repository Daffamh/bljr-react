export {DestructuringProps, DestructuringRest, DefaultValues};

// Destructuring Props
function DestructuringProps({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}


// Destructuring ...rest
function DestructuringRest ({color,brand, ...rest}) {
      return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

// Default Values
function DefaultValues({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

