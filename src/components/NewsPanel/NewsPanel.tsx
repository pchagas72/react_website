import "./NewsPanel.css"
import {Link} from "@tanstack/react-router"

function NewsPanel(){
    const new_stuff = [
        ["15 jul 2024", "Releasing my dotflies and this website's codebase", "/projects"],
        ["06 jul 2024","First blog post", "/blog"]
    ]
    return(
        <div className="NewsPanel_div">
            <h2> New stuff </h2>
            <ul>
                {new_stuff.map(
                    stuff => 
                        <Link key={stuff[0]+stuff[1]} to={stuff[2]} className="stuff_style">
                            <li key={stuff[0]+stuff[1]+"_li"}>{stuff[0] + " - " + stuff[1]}</li>
                        </Link>
                )}
            </ul>
        </div>
    );
}

export default NewsPanel
