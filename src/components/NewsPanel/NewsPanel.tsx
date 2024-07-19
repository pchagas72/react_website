import "./NewsPanel.css"
import {Link} from "@tanstack/react-router"

function NewsPanel(){
    const new_stuff = [
        ["15 jul 2024", "Releasing my dotflies", "/projects"],
        ["15 jul 2024","My opinion on dune messiah", "/projects"]
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
