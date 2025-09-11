import { BrowserRouter,Routes,Route,Link,useParams } from "react-router-dom";

function Info(){
    const {firstname} = useParams();
    return <h1>Hello,{firstname}!</h1>
}

export default function RoParams(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/customer/Muasz"> Muasz </Link> | 
            <Link to="/customer/Daffa"> Daffa </Link> | 
            <Link to="/customer/Nelsa"> Nelsa </Link>
        </nav>

        <Routes>
            <Route path="/customer/:firstname" element={<Info/>}/>
        </Routes>
        </BrowserRouter>
    )
}