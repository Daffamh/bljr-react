const name = "Daffa";
const age = 19;
const message = `Hello, ${name}! You are ${age} years old.`;
document.getElementById("demo").innerHTML = message;


// Expresion interpolation
const items = ["Apple", "Banana", "Cherry"];
const list = `You have ${items.length} items: ${items.map(item => `- ${item}`).join("\n ")}`;
document.getElementById("demo").innerHTML = list; // You have 3 items: - apple - banana - orange

