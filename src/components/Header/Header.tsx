import "./Header.css"
import {Link} from "@tanstack/react-router"

function Header(){
    return (
    <div className="Header_div">
        <h1><Link to="/"> Pedro Chagas  </Link></h1>
    </div>
    );
}

export default Header
