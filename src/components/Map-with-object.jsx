    const users = [
        { id: 1, name: 'Muasz',age : 19 },
        { id: 2, name: 'Daffa',age : 20 },
        { id: 3, name: 'Nelsa',age : 17 }
 ];

export default function UserList(){
        return(
            <ul>
                {users.map(user =>
                <li>
                    {user.name} is {user.age} years old.
                </li>
                )}
            </ul>
        )
    }
