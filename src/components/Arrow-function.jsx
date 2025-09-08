export default function ArrayMap() {
    
class Header {
  constructor() {
    this.color = "Red";
  }

  //Regular Function
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }

  //Arrow Function
  milihColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myHeader = new Header();

//The window object calls the function:
window.addEventListener("load", myHeader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myHeader.changeColor);

//The window object calls the function:
window.addEventListener("load", myHeader.milihColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myHeader.milihColor);

// Array map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
document.getElementById("demo").innerHTML = doubled; // 2,4,6,8
}