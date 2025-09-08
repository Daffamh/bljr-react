export default function NomoreSpread() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;
    return (
        <div>
            <p>First: {one}</p>
            <p>Second: {two}</p>
            <p>Rest: {rest.join(", ")}</p>
        </div>
    );

//     const car = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const car_more = {
//   type: 'car',
//   year: 2021, 
//   color: 'yellow'
// }

// const mycar = {...car, ...car_more}
// return (
//   <div>
//     <p>{mycar.brand} {mycar.model} {mycar.type} {mycar.year} {mycar.color}</p>
//   </div>
// )
    
}