
import { Link } from 'react-router-dom';
import './navbar.css'


export const Navbar = () =>{
    return(
        <>
        <div className="navbar">
            <h1><Link to="/">Ankademin Shop</Link></h1>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            </ul>
        </div>
        </>
    )
}