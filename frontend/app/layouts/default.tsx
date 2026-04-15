import { Link, Outlet } from "react-router";

export default function Default()
{
    return (
        <main>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/vendors"> Vendors </Link>
                <Link to="/customers"> Customers </Link>       
            </nav>
            <Outlet/>
        </main>
    )
}