const fruitlist = ['apple', 'banana', 'cherry'];

export default function App() {
  return (
    <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Number: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}

