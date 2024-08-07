import "./Topics.css"
import {Link} from "@tanstack/react-router"

function Topics(){
    return (
        <div className="Topics_div">
            <a className="Topic">
                <h2><Link to="/projects">Projects</Link></h2>
                <p>Projects, passions and work</p>
            </a>
          <a className="Topic">
                <h2><Link to="/blog">Blog</Link></h2>
                <p>Stuff</p>
            </a>


        </div>
    )
}

export default Topics
