
    const fruitlist = ['apple', 'banana', 'cherry'];
    
export default function MyList() {
      return (
        <ul>
          {fruitlist.map(fruit => 
            <li key={fruit}>{fruit}</li>
          )}
        </ul>
      );
    }
    